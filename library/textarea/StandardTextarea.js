import { useState } from "react";
import { useSpring, animated, interpolate } from "react-spring";
import theme from "../../theme";

const StandardInput = ({
  title,
  placeholder,
  value,
  rows,
  name,
  type,
  onChangeInput
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const { color, opacity } = useSpring({
    from: { color: theme.palette.shade[30], opacity: 0 },
    color:
      isFocus || (!isFocus && value)
        ? theme.palette.blue[100]
        : theme.palette.shade[30],
    opacity: isFocus || (!isFocus && value) ? 1 : 0
  });
  const textareaStyle = {
    border: interpolate([color], c => `0.838px solid ${c}`),
    outline: "none",
    width: "100%",
    borderRadius: `${theme.spacing / 3}px`,
    padding: `${theme.spacing}px ${theme.spacing}px`,
    borderTopLeftRadius: 0,
    marginBottom: `${theme.spacing}px`,
    boxShadow: interpolate([color], color => `${theme.boxShadow} ${color}`),
    resize: "vertical"
  };
  const titleStyle = {
    opacity: opacity,
    fontSize: `${theme.font.size.small}px`,
    backgroundColor: theme.palette.blue[100],
    color: `${theme.palette.shade[0]}`,
    padding: `${theme.spacing / 3}px ${theme.spacing}px`,
    textTransform: "capitalize"
  };
  return (
    <>
      <div className="standard-textarea">
        <animated.span style={titleStyle}>{title}</animated.span>
        <animated.textarea
          type={type}
          name={name}
          value={value}
          placeholder={isFocus ? "" : placeholder}
          rows={rows}
          style={textareaStyle}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={e => onChangeInput(e.target.value)}
        />
      </div>
      <style jsx>{`
        .standard-textarea {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      `}</style>
    </>
  );
};

export default StandardInput;
