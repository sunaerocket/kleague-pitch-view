import seongnamFcIcon from '../assets/icons/seongnamfc.png';

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

export const CLUBS = [seongnamFc];
