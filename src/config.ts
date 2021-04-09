interface Config {
  beforeRequest?: (data: any, headers: any) => void
  onError?: (error: any) => void
}

const configure = (config?: Config) => ({
  beforeRequest: () => {},
  onError: () => {},
  ...config
})

export default configure
