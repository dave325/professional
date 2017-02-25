jQuery(document).ready(function() {
	var j = jQuery;
	var name, email, message, honeypot, response, formInfo;
	j('form').submit(function(e, formInfo) {
		e.preventDefault();
		name = j('#inName');
		email = j('#inEmail');
		message = j('#inMessage');
		honeypot = j(".honeypot");
		response = ' ';
		j('#form-container').css('height', 'auto');
		function inputFieldValidation(inputField, inputCondition) {
			if (inputCondition) {
				if (inputField.siblings('label').hasClass('success') && inputField.hasClass('success-input')) {
					inputField.removeClass('success-input');
					inputField.siblings('label').removeClass('success');
				}
				if (!j(this).parent('div').hasClass('errorDiv')) {
					inputField.parent('div').addClass('errorDiv');
					inputField.siblings('div').fadeIn(800);
					inputField.siblings('label').addClass('danger');
					inputField.addClass('danger-input');
				}
			} else {
				if (inputField.parent('div').hasClass('errorDiv')) {
					inputField.parent('div').removeClass('errorDiv');
					inputField.siblings('div').fadeOut(800);
				}
				inputField.siblings('label').removeClass('danger').addClass('success');
				inputField.removeClass('danger-input').addClass('success-input');
			}
		}
		inputFieldValidation(name, !name.val().match(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+j/));
		inputFieldValidation(email, !email.val().match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}j)/i));
		inputFieldValidation(message, message.val().length <= 15);
	});
});