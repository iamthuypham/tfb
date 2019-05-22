import { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { vietnamMapData } from '../../exampleData/vietnamMap'
import theme from '../../theme'

export const VnMap = () => {
  const [isReady, setIsReady] = useState(false)
  const [cities, setCities] = useState(null)
  const [provinces, setProvinces] = useState(null)
  const colors = {
    BB: theme.palette.red,
    BTB: theme.palette.orange,
    NB: theme.palette.ocean,
    NTB: theme.palette.leaf,
    TN: theme.palette.green
  }

  const provinceHasTours = ['vn-311', 'vn-qt', 'vn-nt', 'vn-299', 'vn-tn']
  const tours = [
    { id: 0, provinceKey: 'vn-311' },
    { id: 1, provinceKey: 'vn-qt' },
    { id: 2, provinceKey: 'vn-nt' },
    { id: 3, provinceKey: 'vn-299' },
    { id: 4, provinceKey: 'vn-299' },
    { id: 5, provinceKey: 'vn-299' }
  ]

  const tourCountByProvince = tours.reduce((current, tour) => {
    if (!current[tour.provinceKey]) {
      return { ...current, [tour.provinceKey]: 1 }
    }
    return { ...current, [tour.provinceKey]: ++current[tour.provinceKey] }
  }, {})

  const options = {
    title: { text: undefined },
    legend: { enabled: false },
    chart: { height: 650 },
    credits: { enabled: false },
    tooltip: {
      borderColor: theme.palette.shade[80],
      backgroundColor: theme.palette.shade[0],
      style: {
        fontSize: theme.font.size.medium,
        fontFamily: theme.font.family.normal
      },
      headerFormat: null,
      formatter: function(e) {
        const { 'hc-key': hcKey, name } = this.point.properties
        return `${
          tourCountByProvince[hcKey] > 1
            ? `${tourCountByProvince[hcKey]} tours`
            : '1 tour'
        } at ${name}`
      }
    },
    series: [
      {
        data:
          provinces &&
          provinces.map(province => {
            const {
              'hc-key': hcKey,
              'region-code': regionCode
            } = province.properties
            if (provinceHasTours.includes(hcKey)) {
              return {
                ...province,
                borderWidth: 1.8,
                color: colors[regionCode][100]
              }
            }
            return {
              ...province,
              value: null,
              borderWidth: 1,
              color: colors[regionCode][0]
            }
          }),
        states: {
          hover: {
            brightness: -0.1
          }
        },
        borderColor: theme.palette.shade[80],
        name: 'Province with Active Tours'
      },
      {
        name: 'Cities',
        type: 'mappoint',
        data: cities,
        animation: false,
        color: theme.palette.shade[80],
        marker: { radius: 5 },
        enableMouseTracking: false,
        dataLabels: {
          format: '<span>{point.properties.name}</span>',
          style: {
            fontSize: theme.font.size.medium,
            fontFamily: theme.font.family.normal,
            fontColor: theme.palette.shade[80]
          }
        }
      }
    ]
  }

  useEffect(() => {
    if (Highcharts) {
      require('highcharts/modules/map')(Highcharts)
      require('highcharts/modules/annotations')(Highcharts)
      if (!provinces) {
        const provinces = Highcharts.geojson(vietnamMapData, 'map')
        setProvinces(provinces)
      }
      if (!cities) {
        const cities = Highcharts.geojson(vietnamMapData, 'mappoint')
        setCities(cities)
      }
      setIsReady(true)
    }
  })

  return (
    <div>
      {isReady && (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'mapChart'}
          options={options}
        />
      )}
    </div>
  )
}
