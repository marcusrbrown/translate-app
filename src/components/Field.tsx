import Flower from './svg/Flower';

function Field({value, onChange}: {value: string; onChange: (value: string) => void}) {
  return (
    <div className='field'>
      <Flower className='flower-right' fill='rgb(110, 146, 119)' />
      <Flower className='flower-left' fill='rgb(249, 148, 59)' />
      <h1>Translate App</h1>
      <label>Enter English</label>
      <input className='input' value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default Field;
