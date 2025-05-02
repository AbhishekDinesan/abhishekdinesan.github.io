
import data from '../info/AboutMe.json';

function parsedJson() {
    return (
      <div>
        {data.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1em' }}>
            <p>{item.text}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            )}
          </div>
        ))}
      </div>
    );
  }

export default parsedJson