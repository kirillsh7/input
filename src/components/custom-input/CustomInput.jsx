import styles from './customInput.module.css'

export const CustomInput = ({
	variant = "filled",
	size = 'sm',
	radius = 'sm',
	label = null,
	withAsterisk = false,
	description = null,
	error = "",
	leftSection,
	rightSection,
	
	...props }) => {

	const getInputPadding = () => {

		let padding = ''

		if (leftSection && rightSection) {
			padding = styles.inputWithBothIcons
		} else if (leftSection) {
			padding = styles.inputWithLeftIcon
		} else if (rightSection) {
			padding = styles.inputWithRightIcon
		}

		return padding
	}

	const inputClass = `${styles.input} ${styles[`input${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${styles[variant]} ${styles[`rounded-${radius}`]} ${error ? styles.error : ''}`

	const labelClass = `${styles.label} ${styles[`label${size.charAt(0).toUpperCase() + size.slice(1)}`]}`

	const descriptionClass = `${styles.description} ${styles[`description${size.charAt(0).toUpperCase() + size.slice(1)}`]}`

	const errorClass = `${styles.error} ${styles[`error${size.charAt(0).toUpperCase() + size.slice(1)}`]}`

	return (

		<div className={styles.blockInput} >
			<div>{label && <label className={labelClass}>{label}</label>}
				{withAsterisk && <span className={styles.asterisk}>*</span>}
			</div>
			{description && <span className={descriptionClass}>{description}</span>}
			<div className={styles.inputWrapper}>
				{leftSection && <i className={styles.leftSection}>{leftSection}</i>}
				{rightSection && <i className={styles.rightSection}>{rightSection}</i>}
				<input className={`${inputClass} ${getInputPadding()}`} {...props} />
			</div>
			{error && <span className={errorClass}>{error}</span>}
		</div>
	)
}