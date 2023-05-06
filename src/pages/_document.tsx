import { ColorModeScript } from '@chakra-ui/react'
import Document ,{ Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import createEmotionServer from "@emotion/server/create-instance";
import emotionCache from '@/libs/emotion-cache';
import * as React from "react";


const {extractCritical} = createEmotionServer(emotionCache);
export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext){
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return{
      ...initialProps,
      styles: [
        initialProps.styles,
        <style 
        key="emotion-css"
        dangerouslySetInnerHTML={{ __html: styles.css }}
        data-emotion-css={styles.ids.join(" ")}
        />,
      ],
    };
  }
  render(){
      return(
        <Html lang='en'>
          <Head>
            <meta charSet='UTF-8' />
            <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
            <script
            defer
            src="https://plausible.io/js/plausible.js"
          />
          <meta name="monetization" content="$ilp.uphold.com/nZ4DF39aHkrm" />
          <link
            rel="preload"
            href="/assets/fonts/CalSans-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/CalSans-SemiBold.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/CalSans-SemiBold.woff2"
            as="font"
            crossOrigin=""
          />
    
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2406141091769247"
     crossOrigin="anonymous"></script>
          </Head>
          <body>
            <ColorModeScript/>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
  }
}
