import React from 'react';
import { Card, CardBody } from '@windmill/react-ui';

const CardItemTwo = ({ title, Icon, className, price }) => {
  return (
    <>
      <Card className="flex justify-center text-center h-full">
        <CardBody
          className={`border border-gray-200 w-full p-6 rounded-lg ${className}`}
        >
          <div className={`text-center inline-block text-3xl ${className}`}>
            <Icon />
          </div>
          <div>
            <p className="mb-3 text-base font-medium text-gray-50">
              {title}
            </p>
            <p className="text-3xl font-bold leading-none text-gray-50 font-lsOne">
              {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardItemTwo;
