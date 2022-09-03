import seongnamFcIcon from '../assets/icons/seongnamfc.png';
import kimcheonSangmuIcon from '../assets/icons/kimcheonsangmu.png';
import daeguFcIcon from '../assets/icons/daegufc.png';

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

const daeguFc = {
  id: 3,
  label: '대구FC',
  coordinates: {
    lat: 35.8812441,
    lng: 128.5882175,
  },
  icon: daeguFcIcon,
};

export const CLUBS = [seongnamFc, kimcheonSangmu, daeguFc];
