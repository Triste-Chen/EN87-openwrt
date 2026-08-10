include $(TOPDIR)/rules.mk

PKG_NAME:=e87n-bypass-defaults
PKG_VERSION:=1
PKG_RELEASE:=1
PKG_LICENSE:=GPL-2.0-or-later
PKG_MAINTAINER:=Triste-Chen

include $(INCLUDE_DIR)/package.mk

define Package/e87n-bypass-defaults
  SECTION:=base
  CATEGORY:=Base system
  TITLE:=EdgePi E87N wired bypass-router defaults
  DEPENDS:=+uci
  PKGARCH:=all
endef

define Package/e87n-bypass-defaults/description
  Safe first-boot defaults for the wired-only E87N bypass-router image.
endef

define Build/Compile
endef

define Package/e87n-bypass-defaults/install
	$(INSTALL_DIR) $(1)/etc/uci-defaults
	$(INSTALL_BIN) ./files/zzz-e87n-bypass $(1)/etc/uci-defaults/zzz-e87n-bypass
endef

$(eval $(call BuildPackage,e87n-bypass-defaults))
