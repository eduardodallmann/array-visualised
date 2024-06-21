import { Fragment, type PropsWithChildren } from 'react';

import { Hr } from './hr';

export function ExampleContainer({ children }: PropsWithChildren) {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className="">
      {childrenArray.map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 ? (
            <Hr type="secondary" className="block md:hidden" />
          ) : (
            <Hr type="primary" className="block md:hidden" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
