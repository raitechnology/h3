Name:		h3lib
Version:	999.999
Release:	99999%{?dist}
Summary:	Uber H3 Geospatual Indexing

Group:		Development/Libraries
License:	ASL 2.0
URL:		https://github.com/raitechnology/%{name}
Source0:	%{name}-%{version}-99999.tar.gz
BuildRoot:	${_tmppath}
BuildRequires:  gcc-c++
BuildRequires:  chrpath
BuildRequires:  git-core
Prefix:	        /usr
Requires(post): /sbin/ldconfig
Requires(postun): /sbin/ldconfig

%description
H3 is a geospatial indexing system using a hexagonal grid that can be
(approximately) subdivided into finer and finer hexagonal grids.

%prep
%setup -q


%define _unpackaged_files_terminate_build 0
%define _missing_doc_files_terminate_build 0
%define _missing_build_ids_terminate_build 0
%define _include_gdb_index 1

%build
make build_dir=./usr %{?_smp_mflags} dist_bins
cp -a ./include ./usr/include

%install
rm -rf %{buildroot}
mkdir -p  %{buildroot}

# in builddir
cp -a * %{buildroot}

%clean
rm -rf %{buildroot}

%files
%defattr(-,root,root,-)
/usr/lib64/*
/usr/include/*

%post
echo "${RPM_INSTALL_PREFIX}/lib64" > /etc/ld.so.conf.d/h3lib.conf
/sbin/ldconfig

%postun
if [ $1 -eq 0 ] ; then
rm -f /etc/ld.so.conf.d/h3lib.conf
fi
/sbin/ldconfig

%changelog
* Sat Jan 01 2000 <chris@raitechnology.com>
- Hello world
