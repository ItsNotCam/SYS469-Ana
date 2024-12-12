import React, { useEffect, useState } from "react";
import model3 from "../assets/Model 3.png";

import frunkIcon from "../assets/frunk.png";
import carIcon from "../assets/car.png";
import doorIcon from "../assets/door.png";
import childSafetyIcon from "../assets/child-safety.png";
import personIcon from "../assets/person.png";
import recline from "../assets/recline.png";
import lockIcon from '../assets/lock.png';
import unlockIcon from '../assets/unlock.png';

import topDownModel3 from '../assets/top-down-model3.png';

interface RowItemProps {
  icon?: JSX.Element;
  name?: string;
  isLast?: boolean;
  notHoverable?: boolean;
  customJSX?: JSX.Element;
	clickAction?: (...args: any[]) => void;
}

const RowItem: React.FC<RowItemProps> = ({
  icon,
  name,
  isLast,
  notHoverable,
	clickAction
}) => {

	const handleClick = () => {
		if(clickAction) {
			clickAction();
		}
	}

  return (
    <div
      className={`
			h-[150px] w-[185px] 
			${notHoverable ? "" : "hover:bg-gray-100 cursor-pointer"}
			${isLast ? "" : "border-r border-gray-200"} grid place-items-center`}
			onClick={handleClick}
    >
      {icon}
      <h1 className="text-lg">{name}</h1>
    </div>
  );
};

interface StorageRowProps {
  rows: RowItemProps[];
}

const StorageRow: React.FC<StorageRowProps> = ({ rows }) => {
  return (
    <div className="flex flex-row overflow-hidden rounded-lg border border-gray-200">
      {rows.map(
        (row: RowItemProps, i: number) =>
          row.customJSX || <RowItem {...row} isLast={i === rows.length - 1}/>
      )}
    </div>
  );
};

const Storage: React.FC = () => {
	const [locked, setLocked] = useState<boolean>(false);

	const getControls = () => {
		return [{
			icon: <img src={frunkIcon} />,
			name: "Open Frunk"
		},{
			icon: <img src={frunkIcon} className="-scale-x-100"/>,
			name: "Open Trunk"
		},{
			icon: <img src={doorIcon} />,
			name: "Open Doors"
		},{
			icon: locked ? <img src={lockIcon} /> : <img src={unlockIcon} />,
			name: locked ? "Locked" : "Unlocked",
			clickAction: () => setLocked(l => !l)
		}]
	}

	const [storageControls, setStorageControls] = useState(getControls())

	// shit solution... no time. 12 hours only for the entire project. please forgive me
	useEffect(() => {
		setStorageControls(getControls());
	}, [locked])

  const doorControls: RowItemProps[] = [
    {
      icon: <img src={frunkIcon} />,
      name: "20kg",
      notHoverable: true,
    },
    {
      icon: <img src={frunkIcon} className="-scale-x-100" />,
      name: "50kg",
      notHoverable: true,
    },
    {
      icon: <img src={doorIcon} />,
      name: "300kg",
      notHoverable: true,
    },
    {
      icon: <img src={carIcon} />,
      name: "21,700kg",
      notHoverable: true,
    },
  ];

  const seatsControls: RowItemProps[] = [
    {
      icon: <img src={childSafetyIcon} className="mt-2 -mb-8" />,
      name: "Driver Seat",
    },
    {
      icon: <img src={childSafetyIcon} className="mt-2 -mb-8" />,
      name: "Passenger Seat",
    },
    {
      customJSX: (
        <div className="flex flex-col flex-grow place-items-center my-auto">
          <div className="flex flex-row items-center gap-4 text-lg">
            <img src={recline} />
            <span>Seats Recline</span>
          </div>
          <div className="w-full px-8 overflow-hidden">
            <div className="grid grid-cols-[1fr,auto] grid-rows-1 gap-4">
              <div className="h-4 grid grid-cols-1 place-items-center relative mt-4">
                <div className="pointer-events-none absolute w-full bg-gray-200 rounded-md h-2" />
                <div
                  className="pointer-events-none absolute h-2 bg-black left-0 rounded-l-md"
                  style={{ width: `${50}%` }}
                />
                <div
                  className="pointer-events-none absolute w-[1rem] h-[1rem] grid place-items-center bg-black rounded-full"
                  style={{ left: `${50}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <img
        src={model3}
        className="absolute -left-12 -bottom-12 object-cover -z-[1] h-[850px] mr-auto mt-auto ml-12"
      />
      <div className="z-[1] ml-auto mr-[250px] py-8 px-8 h-full bg-white shadow-lg gap-6 flex flex-col">
				<div className="flex flex-row gap-2 items-center">
					<img src={personIcon} className="h-[32px]" />
					<h1 className="text-lg">James</h1>
				</div>
        <StorageRow rows={doorControls} />
        <StorageRow rows={seatsControls} />
        <StorageRow rows={storageControls} />
				<div className="flex-grow relative">
					<img src={topDownModel3} className="mx-auto"/>
				</div>
      </div>
    </div>
  );
};

export default Storage;
