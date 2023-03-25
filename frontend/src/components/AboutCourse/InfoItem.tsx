import { FC } from 'react';

interface InfoItemProps {
  type: string;
  value: string;
  icon: string;
}

const InfoItem: FC<InfoItemProps> = ({ type, value, icon }) => {
  return (
      <div className="flex gap-3">
        <i className="rounded-lg text-on-primary-container bg-secondary-container p-2 place-self-center">{icon}</i>
        <div className="flex flex-col justify-center">
          <span className="text-on-surface-variant font-medium text-xs opacity-80">{type}</span>
          <p className="font-medium text-lg mt-[-5px]">{value}</p>
        </div>
      </div>
  );
};

export default InfoItem;
