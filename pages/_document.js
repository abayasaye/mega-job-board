import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";

class MyDocument extends Document {

    static getInitialProps(ctx) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();
        // Step 2: Retrieve styles from components in the page
        const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        let session;

        // Step 4: Pass styleTags as a prop
        return {...page, styleTags, session};
    }

    render() {



        return (
            <Html>
                <Head>


                    {this.props.styleTags}
                </Head>
                <body>
                <Main/>
                <NextScript/>


                </body>
            </Html>);

    }
}

export default MyDocument;
