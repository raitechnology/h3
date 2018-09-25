
CC       ?= gcc
AR       ?= ar
CFLAGS   ?= -ggdb -O2 -Wall -std=gnu99 -fPIC
INCLUDES ?= -Isrc/h3lib/include
DEFINES  ?= -DH3_HAVE_ALLOCA -DH3_HAVE_VLA -DH3_PREFIX=""

all: libh3.a

clean:
	rm -f *.o *.a

libh3.a: algos.o coordijk.o bbox.o polygon.o h3Index.o vec2d.o vec3d.o \
         linkedGeo.o geoCoord.o h3UniEdge.o mathExtensions.o vertexGraph.o \
	 faceijk.o baseCells.o
	$(AR) rc $@ $^

%.o: %.c
	$(CC) $(CFLAGS) $(DEFINES) $(INCLUDES) -c $< -o $@

%.o: src/h3lib/lib/%.c
	$(CC) $(CFLAGS) $(DEFINES) $(INCLUDES) -c $< -o $@

