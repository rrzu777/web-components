// /* eslint-disable max-len */
import { h } from '@stencil/core'

export class Icon {
  viewBox: string = '0 0 20 20'
  svg: SVGAElement
  constructor (viewBox: string, svg: SVGAElement) {
    this.viewBox = viewBox 
    this.svg = svg
  }
}
const svgs = {
  'hamburger': new Icon('0 0 20 20', 
    <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Search-Grid-View-Desktop' transform='translate(-1192.000000, -291.000000)'>
        <rect id='Rectangle' x='1192' y='291' width='20' height='4' />
        <rect id='Rectangle' x='1192' y='299' width='20' height='4' />
        <rect id='Rectangle' x='1192' y='307' width='20' height='4' />
      </g>
    </g>),
  'gridview': new Icon('0 0 20 20',
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Desktop-HD-Copy-32' transform='translate(-1220.000000, -291.000000)'>
        <rect id='Rectangle' x='1220' y='291' width='9' height='8' />
        <rect id='Rectangle' x='1231' y='291' width='9' height='8' />
        <rect id='Rectangle' x='1220' y='303' width='9' height='8' />
        <rect id='Rectangle' x='1231' y='303' width='9' height='8' />
      </g>
    </g>
  ),
  'search': new Icon('0 0 14 14',
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Desktop-HD-Copy-33' transform='translate(-216.000000, -94.000000)' fill='#929292'>
        <g id='Bars-/-Search-Bar-/-x---Glyphs-/-On-Dark---Search-Glyph-Copy' transform='translate(216.000000, 94.000000)'>
          <path d='M13.7430947,12.5740557 L9.91009465,8.73955572 C10.5971654,7.80245935 10.9652265,6.66953223 10.9600947,5.50755572 C10.946985,2.47441147 8.49371664,0.0175744397 5.46059465,5.57178262e-05 C4.00907481,-0.00651157295 2.61521603,0.567712287 1.58953064,1.59480646 C0.56384524,2.62190064 -0.00846492859,4.01654626 9.46502197e-05,5.46805572 C0.0132043609,8.50147611 2.46669652,10.958537 5.50009465,10.9760557 C6.66680484,10.9811124 7.80387114,10.6087552 8.74159465,9.91455572 L8.74559465,9.91155572 L12.5750947,13.7430557 C12.7821435,13.9602692 13.0906604,14.0481921 13.3811096,13.9727584 C13.6715587,13.8973248 13.898302,13.6703873 13.9734871,13.3798737 C14.0486722,13.0893602 13.9604853,12.7809186 13.7430947,12.5740557 L13.7430947,12.5740557 Z M5.49609465,9.87805572 C3.06950871,9.86409673 1.1067469,7.89865842 1.09609465,5.47205572 C1.08954524,4.31099854 1.54743104,3.19550612 2.36782487,2.37389147 C3.1882187,1.55227681 4.30302902,1.09273279 5.46409465,1.09755572 C7.89068059,1.1115147 9.8534424,3.07695301 9.86409465,5.50355572 C9.87064406,6.6646129 9.41275826,7.78010532 8.59236443,8.60171997 C7.7719706,9.42333462 6.65716028,9.88287864 5.49609465,9.87805572 Z' id='Search' />
        </g>
      </g>
    </g>
  ),
  'cancel': new Icon('0 0 15 15',
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='square'>
      <g id='Desktop-HD-Copy-33' transform='translate(-1202.000000, -206.000000)' stroke='#979797'>
        <path d='M1202.5,206.5 L1216.5,220.5' id='Line-2' />
        <path d='M1216.5,206.5 L1202.5,220.5' id='Line-3' />
      </g>
    </g>
  ),
  'cancelCircle': new Icon('0 0 20 20',
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Desktop-HD-Copy-39' transform='translate(-367.000000, -142.000000)'>
        <rect fill='none' x='0' y='0' width='1440' height='2779' />
        <g id='close_filter' transform='translate(368.000000, 143.000000)' stroke='#026CB6'>
          <g id='Group-4'>
            <circle id='Oval' cx='9' cy='9' r='9' />
            <path d='M5.09479512,4.72631413 L13.2843854,13.9189424' id='Line-6' stroke-linecap='round' transform='translate(9.094795, 9.596314) rotate(-3.302581) translate(-9.094795, -9.596314) ' />
            <path d='M5.09479512,4.72631413 L13.2843854,13.9189424' id='Line-6' stroke-linecap='round' transform='translate(9.094795, 9.596314) scale(-1, 1) rotate(-3.302581) translate(-9.094795, -9.596314) ' />
          </g>
        </g>
      </g>
    </g>
  ),
  'filter': new Icon('0 0 15 14',
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='iPhone-SE-Copy-35' transform='translate(-207.000000, -88.000000)' fill='#2F2F2F' fill-rule='nonzero'>
        <g id='Group-5' transform='translate(192.000000, 80.000000)'>
          <g id='Group' transform='translate(15.000000, 6.000000)'>
            <g id='filter' transform='translate(0.000000, 2.000000)'>
              <path d='M14.9565967,0.263986497 C14.8815544,0.102808041 14.721347,0 14.5453795,0 L0.454644359,0 C0.278676863,0 0.118530076,0.102808041 0.0434271725,0.263986497 C-0.0316151149,0.425164953 -0.0080962074,0.615682062 0.103861066,0.753168636 L5.5205443,7.4055547 L5.5205443,13.5396655 C5.5205443,13.6989412 5.60183001,13.8468621 5.7354271,13.9308271 C5.80865092,13.9767991 5.8917551,14 5.97516236,14 C6.04408245,14 6.11324501,13.9841031 6.17701277,13.9521252 L9.2204079,12.4247353 C9.37503865,12.3471536 9.47287246,12.1876323 9.47311492,12.0128894 L9.47905527,7.40573884 L14.8960416,0.753107258 C15.0080595,0.615682062 15.031639,0.425103575 14.9565967,0.263986497 Z M8.67395699,6.94736842 C8.6069766,7.02961485 8.57024346,7.13291392 8.57012223,7.23958877 L8.56430312,11.7264999 L6.42984103,12.797729 L6.42984103,7.24020255 C6.42984103,7.13334356 6.39316851,7.02979899 6.32600627,6.94736842 L1.4186771,0.920607642 L13.5812862,0.920607642 L8.67395699,6.94736842 Z' id='Shape' />
            </g>
          </g>
        </g>
      </g>
    </g>
  ),
  'downShortArrow': new Icon('0 0 13 11',
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='iPhone-SE-Copy-34' transform='translate(-283.000000, -73.000000)' fill='#D8D8D8'>
        <g id='Group-2' transform='translate(16.000000, 68.000000)'>
          <polygon id='Triangle-Copy-3' transform='translate(273.500000, 10.500000) scale(1, -1) translate(-273.500000, -10.500000) ' points='273.5 5 280 16 267 16' />
        </g>
      </g>
    </g>
  ),
  'prevArrowSwiper': new Icon('0 0 27 44',
    <path d='M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z' />
  ),
  'nextArrowSwiper': new Icon('0 0 27 44',
    <path d='M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z' />
  ),
  'longRigthArrow': new Icon('0 0 18 9',
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Product-Page-/-Filter-/-Category-2nd-level-(finishes-and-ceilings-chosen)-Copy-2' transform='translate(-361.000000, -105.000000)'>
        <g id='Group' transform='translate(361.500000, 105.000000)' fill='#026CB6' stroke='#026CB6'>
          <line x1='0.5' y1='4.03702689' x2='12.5' y2='4.03702689' id='Line-4' stroke-linecap='square' />
          <polygon id='Triangle' transform='translate(15.037027, 4.037027) rotate(90.000000) translate(-15.037027, -4.037027) ' points='15.0370269 2 18.5370269 6.07405377 11.5370269 6.07405377' />
        </g>
      </g>
    </g>
  ),
  'rigthArrowSwiper': new Icon('0 0 23 41',
    <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g transform='translate(-1137.000000, -299.000000)'>
        <g id='next-new-(same-width)' transform='translate(1137.000000, 299.000000)' fill='#026CB6' fill-rule='nonzero'>
          <path d='M0.668253328,3.88469172 C0.0890269508,3.30695145 -0.134995122,2.46704721 0.0805740591,1.6813628 C0.29614324,0.895678402 0.918553587,0.283577994 1.71334914,0.0756338837 C2.50814469,-0.132310226 3.3545771,0.0954936202 3.93380345,0.673233917 L22.3312689,18.8942711 C23.2229104,19.782632 23.2229104,21.217368 22.3312689,22.1057289 L3.93380345,40.3267661 C3.3545771,40.9045064 2.50814469,41.1323102 1.71334913,40.9243661 C0.918553569,40.716422 0.296143216,40.1043216 0.0805740368,39.3186372 C-0.134995143,38.5329528 0.0890269389,37.6930485 0.668253328,37.1153083 L17.4329437,20.5113881 L0.668253328,3.88469172 Z' id='Path' />
        </g>
      </g>
    </g>
  ),
  'leftArrowSwiper': new Icon('0 0 23 41',
    <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g transform='translate(-1137.000000, -453.000000)'>
        <g transform='translate(1148.500000, 473.500000) scale(-1, 1) translate(-1148.500000, -473.500000) translate(1137.000000, 453.000000)' fill='#026CB6' fill-rule='nonzero'>
          <path d='M0.668253328,3.88469172 C0.0890269508,3.30695145 -0.134995122,2.46704721 0.0805740591,1.6813628 C0.29614324,0.895678402 0.918553587,0.283577994 1.71334914,0.0756338837 C2.50814469,-0.132310226 3.3545771,0.0954936202 3.93380345,0.673233917 L22.3312689,18.8942711 C23.2229104,19.782632 23.2229104,21.217368 22.3312689,22.1057289 L3.93380345,40.3267661 C3.3545771,40.9045064 2.50814469,41.1323102 1.71334913,40.9243661 C0.918553569,40.716422 0.296143216,40.1043216 0.0805740368,39.3186372 C-0.134995143,38.5329528 0.0890269389,37.6930485 0.668253328,37.1153083 L17.4329437,20.5113881 L0.668253328,3.88469172 Z' id='Path' />
        </g>
      </g>
    </g>
  ),
  'rightChevron': new Icon('0 0 8 14',
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Artboard' transform='translate(-360.000000, -321.000000)'>
        <g id='icon-/-next' transform='translate(360.000000, 321.500000)' fill='#BBBBBB' fill-rule='nonzero'>
          <path d='M0.23243594,1.3264801 C0.0309658959,1.12920293 -0.046954825,0.842406363 0.0280257597,0.574123884 C0.103006344,0.305841406 0.3194969,0.0968315101 0.595947527,0.0258262042 C0.872398154,-0.0451791017 1.16680943,0.0326075776 1.36827946,0.229884752 L7.76739789,6.45170232 C8.07753404,6.75504506 8.07753404,7.24495493 7.76739789,7.54829767 L1.36827946,13.7701152 C1.16680943,13.9673924 0.872398153,14.0451791 0.595947523,13.9741738 C0.319496893,13.9031685 0.103006336,13.6941586 0.0280257519,13.4258761 C-0.0469548322,13.1575936 0.0309658918,12.8707971 0.23243594,12.6735199 L6.06363261,7.00388863 L0.23243594,1.3264801 Z' id='Path' />
        </g>
      </g>
    </g>
  )
}

export default svgs