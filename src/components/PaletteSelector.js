import React from 'react';

const PaletteSelector = ({ colors, selected, setSelected }) => {
  const r = (s, e) => Array.from('x'.repeat(e - s), (_, i) => s + i);
  return (
    <form style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      {r(0, colors.length).map((val) => (
        <div style={{ display: 'flex' }}>
          <label style={{ margin: '15px' }}>
            <input
              type="radio"
              name="option"
              value={val.toString()}
              checked={selected === `${val}`}
              onChange={(event) => {
                setSelected(event.target.value);
              }}
              className="form-check-input"
            />
            <span>{`Option ${val}`} </span>
          </label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {r(0, 5).map((a) => (
              <div
                style={{
                  backgroundColor: colors[val][a],
                  margin: '2px',
                  width: '30px',
                  height: '30px',
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </form>
  );
};

export default PaletteSelector;
