import seongnamFcIcon from '../assets/icons/seongnamfc.png';
import kimcheonSangmuIcon from '../assets/icons/kimcheonsangmu.png';
import daeguFcIcon from '../assets/icons/daegufc.png';
import suwonSamsungIcon from '../assets/icons/suwonsamsung.png';
import fcSeoulIcon from '../assets/icons/fcseoul.png';

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

export const CLUBS = [
  seongnamFc,
  kimcheonSangmu,
  daeguFc,
  suwonSamsung,
  fcSeoul,
];
