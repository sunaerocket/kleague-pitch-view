import seongnamFcIcon from '../assets/icons/seongnamfc.png';
import kimcheonSangmuIcon from '../assets/icons/kimcheonsangmu.png';

export type Club = {
  id: number;
  label: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  icon: string;
};

export type Clubs = Club[];

const seongnamFc = {
  id: 1,
  label: '성남FC',
  coordinates: {
    lat: 37.410107,
    lng: 127.121216,
  },
  icon: seongnamFcIcon,
};

const kimcheonSangmu = {
  id: 2,
  label: '김천상무',
  coordinates: {
    lat: 36.142851,
    lng: 128.087877,
  },
  icon: kimcheonSangmuIcon,
};

export const CLUBS = [seongnamFc, kimcheonSangmu];
