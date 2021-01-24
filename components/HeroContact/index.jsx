import React from 'react'

export const HeroContact = () => {
    return (
            <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-unique-background "
          style={{
            // boxShadow:
            //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            // // backgroundColor: 'rgb(255, 68, 0)',
           
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            // boxShadow:
            //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            // backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center',
          }}
        >
          {subheading}
        </h3>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            // boxShadow:
            //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            // backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            textAlign: 'center',
          }}
        >
          {optionalText}
        </h3>

       <Button href="/contact" text="Contact"/>
      </div>
    
    )
}
