interface Config {
  beforeRequest?: (data: any, headers: any) => void
}

const configure =  (config?: Config) => ({
  beforeRequest: () => {},
  ...config,
})

export default configure