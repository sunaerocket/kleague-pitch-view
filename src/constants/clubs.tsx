import seongnamFcIcon from '../assets/icons/seongnamfc.png';
import kimcheonSangmuIcon from '../assets/icons/kimcheonsangmu.png';
import daeguFcIcon from '../assets/icons/daegufc.png';
import suwonSamsungIcon from '../assets/icons/suwonsamsung.png';
import fcSeoulIcon from '../assets/icons/fcseoul.png';
import suwonFcIcon from '../assets/icons/suwonfc.png';
import gangwonFcIcon from '../assets/icons/gangwonfc.png';
import jejuUnitedIcon from '../assets/icons/jejuunited.png';
import incheonUnitedIcon from '../assets/icons/incheonunited.png';
import pohangSteelersIcon from '../assets/icons/pohangsteelers.png';
import jeonbukHyundaiIcon from '../assets/icons/jeonbukhyundai.png';
import ulsanHyundaiIcon from '../assets/icons/ulsanhyundai.png';

export type Club = {
  id: number;
  club: string;
  stadium: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  icon: string;
};

export type Clubs = Club[];

const seongnamFc = {
  id: 1,
  club: '성남FC',
  stadium: '탄천종합운동장',
  address: '경기도 성남시 분당구 탄천로 215',
  coordinates: {
    lat: 37.410107,
    lng: 127.121216,
  },
  icon: seongnamFcIcon,
};

const kimcheonSangmu = {
  id: 2,
  club: '김천상무',
  stadium: '김천종합스포츠타운',
  address: '경상북도 김천시 운동장길 1',
  coordinates: {
    lat: 36.142851,
    lng: 128.087877,
  },
  icon: kimcheonSangmuIcon,
};

const daeguFc = {
  id: 3,
  club: '대구FC',
  stadium: 'DGB대구은행파크',
  address: '대구광역시 북구 고성로 191',
  coordinates: {
    lat: 35.8812441,
    lng: 128.5882175,
  },
  icon: daeguFcIcon,
};

const suwonSamsung = {
  id: 4,
  club: '수원삼성',
  stadium: '수원월드컵경기장',
  address: '경기도 수원시 팔달구 월드컵로 310',
  coordinates: {
    lat: 37.2864742,
    lng: 127.036866,
  },
  icon: suwonSamsungIcon,
};

const fcSeoul = {
  id: 5,
  club: 'FC서울',
  stadium: '서울월드컵경기장',
  address: '서울특별시 마포구 월드컵로 240',
  coordinates: {
    lat: 37.5682588,
    lng: 126.8972774,
  },
  icon: fcSeoulIcon,
};

const suwonFc = {
  id: 6,
  club: '수원FC',
  stadium: '수원종합운동장',
  address: '경기도 수원시 장안구 경수대로 893',
  coordinates: {
    lat: 37.2990045,
    lng: 127.0112044,
  },
  icon: suwonFcIcon,
};

const gangwonFc = {
  id: 7,
  club: '강원FC',
  stadium: '강릉종합운동장',
  address: '강원도 강릉시 종합운동장길 69',
  coordinates: {
    lat: 37.7732204,
    lng: 128.8973227,
  },
  icon: gangwonFcIcon,
};

const jejuUnited = {
  id: 8,
  club: '제주유나이티드',
  stadium: '제주월드컵경기장',
  address: '제주특별자치도 서귀포시 월드컵로 33',
  coordinates: {
    lat: 33.2461852,
    lng: 126.5093244,
  },
  icon: jejuUnitedIcon,
};

const incheonUnited = {
  id: 9,
  club: '인천유나이티드',
  stadium: '인천월드컵경기장',
  address: '인천광역시 중구 참외전로 246',
  coordinates: {
    lat: 37.4660468,
    lng: 126.6430109,
  },
  icon: incheonUnitedIcon,
};

const pohangSteelers = {
  id: 10,
  club: '포항스틸러스',
  stadium: '포항스틸야드',
  address: '경상북도 포항시 남구 동해안로6213번길 20',
  coordinates: {
    lat: 35.9977189,
    lng: 129.3844018,
  },
  icon: pohangSteelersIcon,
};

const jeonbukHyundai = {
  id: 11,
  club: '전북현대모터스',
  stadium: '전주월드컵경기장',
  address: '전라북도 전주시 덕진구 기린대로 1055',
  coordinates: {
    lat: 35.8681258,
    lng: 127.0644156,
  },
  icon: jeonbukHyundaiIcon,
};

const ulsanHyundai = {
  id: 12,
  club: '울산현대',
  stadium: '울산문수경기장',
  address: '울산광역시 남구 문수로 44',
  coordinates: {
    lat: 35.5352422,
    lng: 129.2595839,
  },
  icon: ulsanHyundaiIcon,
};

export const CLUBS = [
  seongnamFc,
  kimcheonSangmu,
  daeguFc,
  suwonSamsung,
  fcSeoul,
  suwonFc,
  gangwonFc,
  jejuUnited,
  incheonUnited,
  pohangSteelers,
  jeonbukHyundai,
  ulsanHyundai,
];
