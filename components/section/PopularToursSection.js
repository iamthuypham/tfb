import { useFirebase } from '../../hooks/useFirebase'
import { landingPageStrings } from '../../localization/landingPageStrings'
import { TourCard } from '../tour/TourCard'
import Card from '../../library/card/Card'
import theme from '../../theme'

export const PopularToursSection = () => {
  const { tours } = useFirebase()
  const featureTours =
    tours &&
    Object.keys(tours)
      .map(id => tours[id])
      .slice(0, 4)
  if (!tours) {
    return null
  }
  return (
    <>
      <div className="popular-tours-section">
        <div className="popular-tours-section-headline">
          <span>{landingPageStrings.checkoutOurBestTours}</span>
          <span>{landingPageStrings.popularTours}</span>
        </div>
        <div className="tour-list">
          {featureTours.map((tour, index) => (
            <TourCard
              key={tour.id}
              cardImg={tour.images[0]}
              isReverse={index >= 2}
              name={tour.name}
              description={tour.description}
              reviewCount={(tour.reviews || []).length}
              reviewPoint={5}
              price={tour.price}
              tourLength={tour.lengths}
            />
          ))}
        </div>
        <div className="tour-service">
          <Card
            cardImg="tour-service"
            width="100%"
            isReverse
            padding={`${theme.spacing * 3}px`}
            setIsMouseEnter={() => null}
            backgroundColor={theme.palette.blue[100]}
            height="60vh"
          >
            <div>
              <div className="card-title">Why Choose Us</div>
              <div className="card-description">
                <div className="card-subtitle">Comprehensive Services</div>
                <div className="card-detail">
                  All services will be well-arranged from the moment you arrive
                  the airport until the time the tour ends. You will be
                  fully-equipped with our company's phone to keep track of your
                  itinerary and to receive 24/24 instant help from our
                  professional tour consultants.
                </div>
              </div>
              <div className="card-description">
                <div className="card-subtitle">Customer Focus</div>
                <div className="card-detail">
                  We are dedicated to service excellence that gains us customer
                  continuity, and we believe that our customers will have the
                  best travel experience if they feel knowledgeable, confident
                  and carefree.
                </div>
              </div>
              <div className="card-description">
                <div className="card-subtitle">Responsible Travel</div>
                <div className="card-detail">
                  Profits generated from the tours will be contributed to our
                  education fund to provide books and scholarship to
                  underprivileged children.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <style jsx>{`
        .popular-tours-section {
          width: 100%;
        }
        .popular-tours-section-headline {
          text-align: center;
          display: flex;
          flex-direction: column;
          margin-bottom: ${theme.spacing * 5}px;
        }
        .popular-tours-section-headline span:first-child {
          font-size: ${theme.font.size.small};
          text-transform: uppercase;
          color: ${theme.palette.blue[100]};
        }
        .popular-tours-section-headline span:last-child {
          font-family: ${theme.font.family.normal};
          font-size: ${theme.font.size.large};
          font-weight: 800;
          text-transform: capitalize;
          line-height: 0.9;
        }
        .tour-list {
          display: flex;
          flex-wrap: wrap;
        }
        .card-title {
          font-size: ${theme.font.size.large};
          font-weight: 900;
          color: ${theme.palette.shade[0]};
        }
        .card-description {
          padding-top: ${theme.spacing}px;
          padding-bottom: ${theme.spacing}px;
        }
        .card-subtitle {
          font-size: ${theme.font.size.medium};
          font-weight: 900;
          color: ${theme.palette.shade[0]};
          margin-bottom: ${theme.spacing}px;
        }
        .card-detail {
          font-size: ${theme.font.size.normal};
          color: ${theme.palette.shade[0]};
        }
      `}</style>
    </>
  )
}
