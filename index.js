class UriBuilder {
    constructor(hostname) {
        this.hostname = hostname
        this.Uri = hostname
        this.params = {}
    }
    build() {
        const encodedParams = Object.keys(this.params).reduce((acc, paramKey) => {
            return `${acc}&${paramKey}=${encodeURIComponent(this.params[paramKey])}`
        }, '')
        return encodedParams
    }
}
