import { useEffect, useState } from 'react'
import Highcharts, { setOptions } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { vietnamMapData } from '../../exampleData/vietnamMap'
import theme from '../../theme'
import { useFirebase } from '../../hooks/useFirebase'

export const VnMap = () => {
  const [isReady, setIsReady] = useState(false)
  const [cities, setCities] = useState(null)
  const [provinces, setProvinces] = useState(null)
  const { tourCountByProvince, provinceHasTours } = useFirebase()
  const [options, setOptions] = useState(null)

  const colors = {
    BB: theme.palette.red,
    BTB: theme.palette.orange,
    NB: theme.palette.ocean,
    NTB: theme.palette.leaf,
    TN: theme.palette.green
  }

  useEffect(() => {
    if (tourCountByProvince && provinceHasTours) {
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
      setOptions(options)
    }
  }, [tourCountByProvince, provinceHasTours])

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
  }, [Highcharts])

  return (
    <div>
      {isReady && options && (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'mapChart'}
          options={options}
        />
      )}
    </div>
  )
}
