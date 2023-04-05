import React, { useState } from 'react';
import Select from './Select';

const options = [
	{ value: 'one', label: 'one' },
	{ value: 'two', label: 'two' },
	{ value: 'three', label: 'three' },
	{ value: 'four', label: 'four' },
];
function App() {
	const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

	return (
		<div>
			<Select options={options} value={value} onChange={(o) => setValue(o)} />
		</div>
	);
}

export default App;

// watch 25 min
// https://www.youtube.com/watch?v=bAJlYgeovlg
