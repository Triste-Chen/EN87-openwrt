'use strict';
'require view';
'require form';
'require fs';

return view.extend({
	load: function() {
		return fs.read('/etc/mosdns/config.yaml').catch(function() {
			return '';
		});
	},

	render: function(configText) {
		let m, s, o;

		m = new form.Map('mosdns-ui', _('MosDNS'),
			_('MosDNS 监听 127.0.0.1:6052。修改 YAML 后保存并应用，服务会自动重启。'));

		s = m.section(form.NamedSection, 'settings', 'mosdns-ui', _('服务设置'));
		s.anonymous = true;

		o = s.option(form.Flag, 'enabled', _('启用 MosDNS'));
		o.default = '1';
		o.rmempty = false;

		o = s.option(form.TextValue, '_config', _('config.yaml'));
		o.rows = 28;
		o.monospace = true;
		o.rmempty = false;
		o.cfgvalue = function() {
			return configText;
		};
		o.write = function(section_id, value) {
			let normalized = value.replace(/\r\n/g, '\n');
			if (!normalized.endsWith('\n'))
				normalized += '\n';
			return fs.write('/etc/mosdns/config.yaml', normalized);
		};

		return m.render();
	}
});
