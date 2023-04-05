import { useState } from 'react';
import style from './assets/select.module.css';
type SelectOptions = {
	label: string;
	value: string;
};
type SelectProps = {
	value?: SelectOptions;
	onChange: (value: SelectOptions | undefined) => void;
	options: SelectOptions[];
};

function Select({ value, onChange, options }: SelectProps) {
	const [open, setIsOpen] = useState(false);

	const clearOption = () => {
		onChange(undefined);
	};

	const setOption = (o: SelectOptions) => {
		onChange(o);
	};
	return (
		<div
			onClick={() => setIsOpen((pre) => !pre)}
			onBlur={() => setIsOpen(false)}
			tabIndex={0}
			className={style.container}
		>
			<span className={style.value}>{value?.label}</span>
			<button
				onClick={(e) => {
					e.stopPropagation();
					clearOption();
				}}
				className={style['clear-btn']}
			>
				&times;
			</button>
			<div className={style.divider}></div>
			<div className={style.caret}></div>
			<ul className={`${style.options} ${open && style.show}`}>
				{options.map((op, i) => (
					<li
						onClick={(e) => {
							e.stopPropagation();
							setOption(op);
							setIsOpen(false);
						}}
						className={style.option}
						key={i}
					>
						{op.label}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Select;
