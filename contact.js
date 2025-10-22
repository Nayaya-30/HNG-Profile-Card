document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('contact-form'), msg = document.getElementById('success-message'), shown = {};
	function label(n) { return { fullName: 'Full Name', email: 'Email Address', subject: 'Subject', message: 'Message' }[n] || n; }
	function showErr(el, m) { el.textContent = m; el.style.opacity = 1; }
	function validate(f) {
		const v = f.value.trim(), n = f.name, e = document.getElementById(n + '-error');
		e.textContent = ''; e.style.opacity = 0;
		if (f.required && !v) { showErr(e, `${label(n)} is required`); shown[n] = 1; return false; }
		switch (n) {
			case 'email': if (v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { showErr(e, 'Please enter a valid email address'); shown[n] = 1; return false; } break;
			case 'fullName': if (v.length < 3) { showErr(e, 'Full name must be at least 3 characters'); shown[n] = 1; return false; } break;
			case 'subject': if (v.length < 3) { showErr(e, 'Subject must be at least 3 characters'); shown[n] = 1; return false; } break;
			case 'message': if (v.length < 10) { showErr(e, 'Message must be at least 10 characters'); shown[n] = 1; return false; } break;
		}return true;
	}
	form.querySelectorAll('input,textarea').forEach(f => {
		const n = f.name;
		f.addEventListener('blur', () => validate(f));
		f.addEventListener('input', () => {
			const e = document.getElementById(n + '-error');
			if (['email', 'message'].includes(n)) {
				if (shown[n]) { e.style.opacity = 0; return; }
				if (e.style.opacity !== 0) e.style.opacity = 0;
			} else validate(f);
		});
	});
	form.addEventListener('submit', e => {
		e.preventDefault();
		let ok = true;
		form.querySelectorAll('input,textarea').forEach(f => { if (!validate(f)) ok = false; });
		if (ok) { msg.style.display = 'flex'; form.reset(); Object.keys(shown).forEach(k => shown[k] = 0); setTimeout(() => msg.style.display = 'none', 5000); }
	});
});