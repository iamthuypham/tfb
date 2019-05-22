export const Section = ({
  id,
  children,
  height,
  padding,
  backgroundColor,
  flexDirection,
  justifyContent,
  alignItems,
  backgroundImage
}) => (
  <>
    <div id={id} className="section">
      {children}
    </div>
    <style jsx>{`
      .section {
        height: ${height};
        padding: ${padding};
        background-color: ${backgroundColor};
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    `}</style>
  </>
)
