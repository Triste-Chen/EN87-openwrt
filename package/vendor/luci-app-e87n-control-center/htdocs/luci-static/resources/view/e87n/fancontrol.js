'use strict';
'require view';
'require form';

return view.extend({
	render: function() {
		let m, s, o;

		m = new form.Map('fancontrol', _('E87N 风扇控制'),
			_('使用设备原生 PWM 风扇服务。保存并应用后，风扇服务会自动重新加载。'));

		s = m.section(form.NamedSection, 'settings', 'fancontrol', _('风扇设置'));
		s.anonymous = true;

		o = s.option(form.Flag, 'enable', _('启用风扇控制'));
		o.default = '1';
		o.rmempty = false;

		o = s.option(form.ListValue, 'mode', _('运行模式'));
		o.value('0', _('静音'));
		o.value('1', _('均衡'));
		o.value('2', _('性能'));
		o.default = '1';
		o.rmempty = false;

		o = s.option(form.Value, 'start_temp', _('起转温度（℃）'));
		o.datatype = 'uinteger';
		o.default = '45';

		o = s.option(form.Value, 'start_speed', _('起转 PWM'));
		o.datatype = 'range(0,255)';
		o.default = '35';

		o = s.option(form.Value, 'max_speed', _('最大 PWM'));
		o.datatype = 'range(1,255)';
		o.default = '255';

		o = s.option(form.DummyValue, 'rpm_supported', _('转速检测'));
		o.cfgvalue = function(section_id) {
			return this.map.data.get('fancontrol', section_id, 'rpm_supported') === '1'
				? _('硬件支持 RPM 回读')
				: _('本机仅支持 PWM 调速，没有转速传感器输入');
		};

		return m.render();
	}
});
