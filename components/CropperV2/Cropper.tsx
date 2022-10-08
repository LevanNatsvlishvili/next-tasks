import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import InputSlider from 'components/InputSlider';

const icons = {
  minus: (
    <svg
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H17"
        stroke="#202945"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  plus: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1V17"
        stroke="#202945"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 9H17"
        stroke="#202945"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  dragAndMatch: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8423 9.42408V7.3192C17.8423 6.76095 17.6205 6.22557 17.2257 5.83083C16.8309 5.43609 16.2954 5.21432 15.7371 5.21432H7.31616C6.75782 5.21432 6.22235 5.43609 5.82754 5.83083C5.43274 6.22557 5.21094 6.76095 5.21094 7.3192V15.7387C5.21094 16.297 5.43274 16.8323 5.82754 17.2271C6.22235 17.6218 6.75782 17.8436 7.31616 17.8436H9.42139"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5254 11.528L20.9989 14.6854L16.7885 16.7902L14.6832 21L11.5254 11.528Z"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 1V1.01044"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.21114 1V1.01044"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.41992 1V1.01044"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.6309 1V1.01044"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 5.21432V5.22476"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 9.4209V9.43134"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 13.6275V13.6379"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};

function CropperV2(props) {
  const { setImg, img, baseImg, setBaseImg } = props;
  const [open, setOpen] = useState<boolean>(false);

  const [crop, setCrop] = useState<any>();
  const [value, setValue] = useState<number>(0);

  const handleChange = (newVal: any) => {
    setValue(newVal);
  };

  const handleCrop = () => {
    if (typeof crop !== 'undefined') {
      setImg(crop.getCroppedCanvas().toDataURL());
    }
  };

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setBaseImg(reader.result.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="h-4-4 w-15-2 border border-blue-dark rounded-1-0 mt-3-0 flex items-center justify-center"
        for="file"
      >
        Dodaj zdjęcie
      </button>
      {open && (
        <div className="fixed w-full h-full top-0 left-0">
          <div className="relative w-full h-full">
            <div className="bg-black opacity-40 w-full h-full absolute"></div>
            <div className="text-center w-[616px] h-[675px] bg-white rounded-1-0 px-[126px] py-3-0 absolute top-50-percent left-50-percent -translate-x-50-percent -translate-y-50-percent">
              <p className="font-700 text-1-8 leading-2-2">Zdjęcie profilowe</p>
              <p className="text-1-4 leading-2-1 text-blue-dark  mt-1-1">
                Dodaj lub zmień obecne zdjęcie profilowe
              </p>

              <div>
                <label
                  className="m-auto h-4-4 w-15-2 border border-blue-dark rounded-1-0 mt-3-0 flex items-center justify-center"
                  htmlFor="file"
                >
                  Dodaj zdjęcie
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onSelectFile}
                  className="hidden"
                  id="file"
                />
              </div>

              <div className="p-0-5 mt-1-4 w-full ">
                <div className="h-36-0 w-36-0 mx-auto relative">
                  <div className="absolute top-3-7 left-50-percent -translate-x-50-percent text-white z-30 bg-black/50 p-1-0 flex w-fit rounded-1-0">
                    {icons.dragAndMatch}
                    <p className="ml-0-7">Przeciągaj i dopasuj</p>
                  </div>
                  <Cropper
                    zoomTo={value}
                    className="h-full w-full mx-auto"
                    src={baseImg}
                    minCropBoxHeight={20}
                    minCropBoxWidth={20}
                    scaleX={2}
                    scaleY={2}
                    autoCropArea={4}
                    onInitialized={(instance) => {
                      setCrop(instance);
                    }}
                    guides={false}
                    viewMode={3}
                    scalable={false}
                  />
                </div>
              </div>
              <div className="mt-2-0 h-2-0 flex items-center">
                <div className="mr-1-4 cursor-pointer py-0-6 pr-1-6">
                  {icons.minus}
                </div>
                <InputSlider onChange={handleChange} value={value} />
                <div className="ml-1-4 cursor-pointer py-0-6 pl-1-6">
                  {icons.plus}
                </div>
              </div>

              <div className="flex items-center mt-3-0">
                <button
                  onClick={handleCrop}
                  className="text-blue-dark m-auto h-4-4 w-15-2 border border-blue-dark rounded-1-0 flex items-center justify-center"
                >
                  Anuluj
                </button>
                <button
                  onClick={handleCrop}
                  className="bg-[#FF671D] text-[#fff] m-auto h-4-4 w-15-2 rounded-1-0 flex items-center justify-center"
                >
                  Zapisz zmiany
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CropperV2;
