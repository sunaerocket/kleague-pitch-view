import seongnamFcIcon from '../assets/icons/seongnamfc.png';
import kimcheonSangmuIcon from '../assets/icons/kimcheonsangmu.png';
import daeguFcIcon from '../assets/icons/daegufc.png';
import suwonSamsungIcon from '../assets/icons/suwonsamsung.png';
import fcSeoulIcon from '../assets/icons/fcseoul.png';
import suwonFcIcon from '../assets/icons/suwonfc.png';
import gangwonFcIcon from '../assets/icons/gangwonfc.png';
import jejuUnitedIcon from '../assets/icons/jejuunited.png';
import incheonUnitedIcon from '../assets/icons/incheonunited.png';

export type Club = {
  id: number;
  club: string;
  stadium: string;
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
  coordinates: {
    lat: 37.263333,
    lng: 127.028611,
  },
  icon: suwonSamsungIcon,
};

const fcSeoul = {
  id: 5,
  club: 'FC서울',
  stadium: '서울월드컵경기장',
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
  coordinates: {
    lat: 37.263333,
    lng: 127.028611,
  },
  icon: suwonFcIcon,
};

const gangwonFc = {
  id: 7,
  club: '강원FC',
  stadium: '강릉종합운동장',
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
  coordinates: {
    lat: 37.4660468,
    lng: 126.6430109,
  },
  icon: incheonUnitedIcon,
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
];
