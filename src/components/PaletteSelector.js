import React from 'react';

const PaletteSelector = ({ colors, selected, setSelected, color, setColor }) => {
  const r = (s, e) => Array.from('x'.repeat(e - s), (_, i) => s + i);
  return (
    <form style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <form style={{ display: 'flex', justifyContent: 'center' }}>
        <label style={{ margin: '15px' }}>
          <input
            type="radio"
            name="option"
            value="black"
            checked={color === 'black'}
            onChange={(event) => {
              setColor(event.target.value);
            }}
            className="form-check-input"
          />
          <span>black </span>
        </label>
        <label style={{ margin: '15px' }}>
          <input
            type="radio"
            name="option"
            value="white"
            checked={color === 'white'}
            onChange={(event) => {
              setColor(event.target.value);
            }}
            className="form-check-input"
          />
          <span>white </span>
        </label>
      </form>
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
                  margin: '1px',
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
