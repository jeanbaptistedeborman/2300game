export const styles = `
.card {
    font-family: arial, sans-serif;
    font-size: 10px;
    height: 33.33333%;
    width: 33.33333%;
    border: 1px solid black;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
}
.title {
    text-align:center;
    padding: 10px;
    font-size: 12px;
}
body {

}

.page {
    background-color: lightgoldenrodyellow;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    page-break-after: always;

}

.page.verso {
    background-color: aliceblue;
    flex-direction: row-reverse;
}`