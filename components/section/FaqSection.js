import { landingPageStrings } from '../../localization/landingPageStrings'
import { faqStrings } from '../../localization/faqStrings'
import ExpansionPanelGroup from '../../library/panel/ExpansionPanelGroup'
import theme from '../../theme'

export const FaqSection = () => (
  <>
    <div className="faq-section">
      <span className="faq-section-headline">
        {landingPageStrings.frequentlyAskedQuestions}
      </span>
      <ExpansionPanelGroup
        items={Object.keys(faqStrings).map(key => ({
          title: faqStrings[key].question,
          description: faqStrings[key].answer
        }))}
      />
    </div>
    <style jsx>
      {`
        .faq-section {
          width: 100%;
        }
        .faq-section-headline {
          text-align: center;
          display: flex;
          flex-direction: column;
          font-family: ${theme.font.family.normal};
          font-size: ${theme.font.size.large};
          font-weight: 800;
          text-transform: capitalize;
          line-height: 0.9;
          margin-bottom: ${theme.spacing}px;
        }
      `}
    </style>
  </>
)
