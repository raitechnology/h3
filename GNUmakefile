lsb_dist     := $(shell if [ -x /usr/bin/lsb_release ] ; then lsb_release -is ; else echo Linux ; fi)
lsb_dist_ver := $(shell if [ -x /usr/bin/lsb_release ] ; then lsb_release -rs | sed 's/[.].*//' ; else uname -r | sed 's/[-].*//' ; fi)
uname_m      := $(shell uname -m)

short_dist_lc := $(patsubst CentOS,rh,$(patsubst RedHatEnterprise,rh,\
                   $(patsubst RedHat,rh,\
                     $(patsubst Fedora,fc,$(patsubst Ubuntu,ub,\
                       $(patsubst Debian,deb,$(patsubst SUSE,ss,$(lsb_dist))))))))
short_dist    := $(shell echo $(short_dist_lc) | tr a-z A-Z)
pwd           := $(shell pwd)
rpm_os        := $(short_dist_lc)$(lsb_dist_ver).$(uname_m)

# this is where the targets are compiled
build_dir ?= $(short_dist)$(lsb_dist_ver)_$(uname_m)$(port_extra)
bind      := $(build_dir)/bin
libd      := $(build_dir)/lib64
objd      := $(build_dir)/obj
dependd   := $(build_dir)/dep

default_cflags := -ggdb -O3
# use 'make port_extra=-g' for debug build
ifeq (-g,$(findstring -g,$(port_extra)))
  default_cflags := -ggdb
endif
ifeq (-a,$(findstring -a,$(port_extra)))
  default_cflags := -fsanitize=address -ggdb -O3
endif

# these work as well
# CC         = clang
# CXX        = clang++
CC          ?= gcc
cc          := $(CC)
cpp         := $(CXX)

#cppflags    := -fno-rtti -fno-exceptions -fsanitize=address
arch_cflags := -fno-omit-frame-pointer
#cpplink     := $(CC) -lasan
cpplink     := $(CC)
gcc_wflags  := -Wall -Wextra -Werror
fpicflags   := -fPIC
soflag      := -shared
rpath       := -Wl,-rpath,$(pwd)/$(libd)

# rpmbuild uses RPM_OPT_FLAGS
CFLAGS := $(default_cflags)
#RPM_OPT_FLAGS ?= $(default_cflags)
#CFLAGS ?= $(RPM_OPT_FLAGS)
cflags := $(gcc_wflags) $(CFLAGS) $(arch_cflags)

INCLUDES    ?= -Isrc/h3lib/include -Iinclude/h3lib
includes    := $(INCLUDES)
DEFINES     ?= -DH3_HAVE_ALLOCA -DH3_HAVE_VLA -DH3_PREFIX=""
defines     := $(DEFINES)
math_lib    := -lm

.PHONY: everything
everything: all

# copr/fedora build (with version env vars)
# copr uses this to generate a source rpm with the srpm target
-include .copr/Makefile

# debian build (debuild)
# target for building installable deb: dist_dpkg
-include deb/Makefile

all_exes    :=
all_libs    :=
all_dlls    :=
all_depends :=

libh3_files := algos coordijk bbox polygon h3Index vec2d vec3d \
	       linkedGeo geoCoord h3UniEdge mathExtensions vertexGraph \
	       faceijk baseCells localij
libh3_objs  := $(addprefix $(objd)/, $(addsuffix .o, $(libh3_files)))
libh3_dbjs  := $(addprefix $(objd)/, $(addsuffix .fpic.o, $(libh3_files)))
libh3_deps  := $(addprefix $(dependd)/, $(addsuffix .d, $(libh3_files))) \
               $(addprefix $(dependd)/, $(addsuffix .fpic.d, $(libh3_files)))
libh3_spec  := $(version)-$(build_num)_$(git_hash)
libh3_ver   := $(major_num).$(minor_num)

$(libd)/libh3.a: $(libh3_objs)
$(libd)/libh3.so: $(libh3_dbjs)

all_libs    += $(libd)/libh3.a
all_dlls    += $(libd)/libh3.so
all_depends += $(libh3_deps)

all_dirs := $(bind) $(libd) $(objd) $(dependd)

# the default targets
.PHONY: all
all: $(all_libs) $(all_dlls) $(all_exes)

src/h3lib/include/h3api.h: src/h3lib/include/h3api.h.in VERSION
	sed -e "s/@H3_VERSION_MAJOR@/$(major_num)/" \
	    -e "s/@H3_VERSION_MINOR@/$(minor_num)/" \
	    -e "s/@H3_VERSION_PATCH@/$(patch_num)/" \
	    src/h3lib/include/h3api.h.in > src/h3lib/include/h3api.h

# create directories
$(dependd):
	@mkdir -p $(all_dirs)

# remove target bins, objs, depends
.PHONY: clean
clean:
	rm -r -f $(bind) $(libd) $(objd) $(dependd)
	if [ "$(build_dir)" != "." ] ; then rmdir $(build_dir) ; fi

.PHONY: clean_dist
clean_dist:
	rm -rf dpkgbuild rpmbuild

.PHONY: clean_all
clean_all: clean clean_dist

$(dependd)/depend.make: $(dependd) src/h3lib/include/h3api.h $(all_depends)
	@echo "# depend file" > $(dependd)/depend.make
	@cat $(all_depends) >> $(dependd)/depend.make

.PHONY: dist_bins
dist_bins: $(all_libs) $(all_dlls)
	chrpath -d $(libd)/libh3.so

.PHONY: dist_rpm
dist_rpm: srpm
	( cd rpmbuild && rpmbuild --define "-topdir `pwd`" -ba SPECS/h3.spec )

# force a remake of depend using 'make -B depend'
.PHONY: depend
depend: $(dependd)/depend.make

# dependencies made by 'make depend'
-include $(dependd)/depend.make

ifeq ($(DESTDIR),)
# 'sudo make install' puts things in /usr/local/lib, /usr/local/include
install_prefix = /usr/local
else
# debuild uses DESTDIR to put things into debian/libdecnumber/usr
install_prefix = $(DESTDIR)/usr
endif

install: dist_bins
	install -d $(install_prefix)/lib
	install -d $(install_prefix)/include/h3lib
	for f in $(libd)/libh3.* ; do \
	if [ -h $$f ] ; then \
	cp -a $$f $(install_prefix)/lib ; \
	else \
	install $$f $(install_prefix)/lib ; \
	fi ; \
	done
	if [ -d include ] ; then \
	install -m 644 include/h3lib/*.h $(install_prefix)/include/h3lib ; \
	else \
	install -m 644 src/h3lib/include/*.h $(install_prefix)/include/h3lib ; \
	fi

$(objd)/%.o: src/h3lib/lib/%.c
	$(cc) $(cflags) $(fpicflags) $(includes) $(defines) $($(notdir $*)_includes) $($(notdir $*)_defines) -c $< -o $@

$(objd)/%.fpic.o: src/h3lib/lib/%.c
	$(cc) $(cflags) $(fpicflags) $(includes) $(defines) $($(notdir $*)_includes) $($(notdir $*)_defines) -c $< -o $@

$(libd)/%.a:
	ar rc $@ $($(*)_objs)

$(libd)/%.so:
	$(cpplink) $(soflag) $(rpath) $(cflags) -o $@.$($(*)_spec) -Wl,-soname=$(@F).$($(*)_ver) $($(*)_dbjs) $($(*)_dlnk) $(cpp_dll_lnk) $(sock_lib) $(math_lib) $(thread_lib) $(malloc_lib) $(dynlink_lib) && \
	cd $(libd) && ln -f -s $(@F).$($(*)_spec) $(@F).$($(*)_ver) && ln -f -s $(@F).$($(*)_ver) $(@F)

$(dependd)/%.d: src/h3lib/lib/%.c
	gcc $(arch_cflags) $(defines) $(includes) $($(notdir $*)_includes) $($(notdir $*)_defines) -MM $< -MT $(objd)/$(*).o -MF $@

$(dependd)/%.fpic.d: src/h3lib/lib/%.c
	gcc $(arch_cflags) $(defines) $(includes) $($(notdir $*)_includes) $($(notdir $*)_defines) -MM $< -MT $(objd)/$(*).fpic.o -MF $@
