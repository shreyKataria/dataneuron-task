import "../App.css";
import { Resizable } from "re-resizable";
export default function ResizeContainer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "1px",
      }}>
      <div
        style={{
          display: "flex",
          padding: "1px",
        }}>
        <Resizable
          style={{
            border: "1px solid black",
          }}
          className="grid-item"
          width={320}
          height={200}>
          <img
            src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-pm1cary85vjb1.jpg?width=640&crop=smart&auto=webp&s=b08a782c1d86fc39fb239ab272c8ec2d70910cd6"
            alt="photo"
          />
        </Resizable>
        <Resizable
          style={{
            border: "1px solid black",
          }}
          className="grid-item"
          width={320}
          height={200}>
          <img
            src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-pm1cary85vjb1.jpg?width=640&crop=smart&auto=webp&s=b08a782c1d86fc39fb239ab272c8ec2d70910cd6"
            alt="photo"
          />
        </Resizable>
      </div>
      <Resizable
        style={{
          border: "1px solid black",
        }}
        className="grid-item"
        width={320}
        height={200}>
        <img
          src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-pm1cary85vjb1.jpg?width=640&crop=smart&auto=webp&s=b08a782c1d86fc39fb239ab272c8ec2d70910cd6"
          alt="photo"
        />
      </Resizable>
    </div>
  );
}
