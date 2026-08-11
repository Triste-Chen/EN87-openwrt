'use strict';
'require view';
'require form';

return view.extend({
	render: function() {
		let m, s, o;

		m = new form.Map('adguardhome', _('AdGuard Home'),
			_('首次启用后请打开 http://192.168.88.1:3000 完成初始化。为避免与 dnsmasq 的 53 端口冲突，默认保持关闭。'));

		s = m.section(form.NamedSection, 'config', 'adguardhome', _('服务设置'));
		s.anonymous = true;

		o = s.option(form.Flag, 'enabled', _('启用 AdGuard Home'));
		o.default = '0';
		o.rmempty = false;

		o = s.option(form.Value, 'config', _('配置文件'));
		o.default = '/etc/adguardhome.yaml';
		o.rmempty = false;

		o = s.option(form.Value, 'workdir', _('工作目录'));
		o.default = '/var/lib/adguardhome';
		o.rmempty = false;

		o = s.option(form.Value, 'pidfile', _('PID 文件'));
		o.default = '/run/adguardhome.pid';
		o.rmempty = false;

		o = s.option(form.DummyValue, '_webui', _('管理地址'));
		o.default = 'http://192.168.88.1:3000';
		o.cfgvalue = function() {
			return 'http://192.168.88.1:3000';
		};

		return m.render();
	}
});
