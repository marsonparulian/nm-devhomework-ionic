// This file contains services related to movies.

/**
 * Fetch all 'Now showing' data
 */
export const fetchCurrent = async () => {
    // URL to a proxy server
    const url = 'http://nm-server-dev.ap-southeast-2.elasticbeanstalk.com/now-showing';
    let response;
    try {
        response = await fetch(url);
        const json = await response.json();

        // Check the data availability
        const data = json?.Data;
        if (!data) throw new Error("No data found");
        return data;
    } catch (e: any) {
        console.error(`Error fetching JSON from : ${url}`);
        console.error(`acquired response : ${response}`);
        throw (e);
    }
}

export default {
    fetchCurrent,
}
