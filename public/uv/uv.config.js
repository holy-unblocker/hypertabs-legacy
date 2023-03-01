/* eslint-disable */
{
  function format(env) {
    const { host, hostname, protocol } = location;

    return env
      .replace("%{location.host}", host)
      .replace("%{location.hostname}", hostname)
      .replace("%{location.protocol}", protocol);
  }

  self.__uv$config = {
    prefix: "/uv/service/",
    bare:
      location.hostname === "localhost"
        ? format("%{location.protocol}//%{location.hostname}:8001/")
        : format("%{location.protocol}//uv.%{location.host}/"),
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/uv.handler.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    client: "/uv/uv.client.js",
    sw: "/uv/uv.sw.js",
  };
}
