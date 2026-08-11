include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-e87n-control-center
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

LUCI_TITLE:=LuCI control center for EdgePi E87N services
LUCI_DEPENDS:=+luci-base +fancontrol +display-control +mosdns +adguardhome
LUCI_PKGARCH:=all

PKG_LICENSE:=Apache-2.0
PKG_MAINTAINER:=EN87 OpenWrt

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature
