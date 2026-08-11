'use strict';
'require view';
'require form';

return view.extend({
	render: function() {
		let m, s, o;

		m = new form.Map('display', _('E87N 屏幕控制'),
			_('控制 NV3007 状态屏、背光亮度、开机动画和定时策略。'));

		s = m.section(form.NamedSection, 'settings', 'display', _('屏幕设置'));
		s.anonymous = true;

		o = s.option(form.Flag, 'enabled', _('启用屏幕'));
		o.default = '1';
		o.rmempty = false;

		o = s.option(form.Value, 'brightness_percent', _('亮度（%）'));
		o.datatype = 'range(0,100)';
		o.default = '72';
		o.rmempty = false;

		o = s.option(form.Flag, 'boot_animation', _('开机动画'));
		o.default = '1';

		o = s.option(form.Flag, 'timer_enabled', _('启用定时开关屏'));
		o.default = '0';

		o = s.option(form.Flag, 'power_on_enabled', _('定时开屏'));
		o.depends('timer_enabled', '1');

		o = s.option(form.Value, 'power_on_time', _('开屏时间'));
		o.default = '07:30';
		o.placeholder = '07:30';
		o.depends({ 'timer_enabled': '1', 'power_on_enabled': '1' });

		o = s.option(form.Flag, 'power_off_enabled', _('定时关屏'));
		o.depends('timer_enabled', '1');

		o = s.option(form.Value, 'power_off_time', _('关屏时间'));
		o.default = '22:00';
		o.placeholder = '22:00';
		o.depends({ 'timer_enabled': '1', 'power_off_enabled': '1' });

		o = s.option(form.Flag, 'brightness_schedule_enabled', _('启用分时亮度'));
		o.default = '0';

		for (let i = 1; i <= 3; i++) {
			o = s.option(form.Value, 'brightness_slot' + i + '_time', _('亮度时段 %d 时间').format(i));
			o.placeholder = 'HH:MM';
			o.depends('brightness_schedule_enabled', '1');

			o = s.option(form.Value, 'brightness_slot' + i + '_percent', _('亮度时段 %d 百分比').format(i));
			o.datatype = 'range(0,100)';
			o.depends('brightness_schedule_enabled', '1');
		}

		return m.render();
	}
});
