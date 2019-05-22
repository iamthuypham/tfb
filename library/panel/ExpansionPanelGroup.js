import Expansionpanel from './ExpansionPanel'

const ExpansionPanelGroup = ({ items }) => (
  <>
    {items.map(item => (
      <Expansionpanel
        key={item.title}
        title={item.title}
        description={item.description}
      />
    ))}
  </>
)

export default ExpansionPanelGroup
