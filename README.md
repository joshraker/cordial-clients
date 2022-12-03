# Cordial Clients

## Usage

### Build all clients

```shell
make
```

or

```shell
make all
```

Each client will be placed in `<generator-name>/client/`.

### Build example Docker image

```shell
make build-<generator-name>
```

Usually not used directly. A prerequisite of the `run-<generator-name>` target.

### Run the examples for a client

```shell
make run-<generator-name> CORDIAL_USERNAME='user' CORDIAL_PASSWORD='pass'
```

See `Makefile` for a list of available clients.

## Learnings

- Do not use inheritance or composition with `allOf`. Most generators don't
  handle it properly and it's usually not necessary for a client. I haven't
  messed with `oneOf` or `anyOf` much but it's probably better to just use the
  [any type](https://swagger.io/docs/specification/data-models/data-types/#any)
  (`{}`) instead.
- Always provide a `title` for inline schemas so that the generated models will
  have a useful name. Otherwise the generator may pick a name like
  `InlineRequest001` which makes it difficult to use the client directly.
- The generated examples/docs are not always 100% accurate. Don't be surprised
  if you have to read the code for the client in order to determine how to use
  it. In other words, we may have to produce usable documentation for the
  clients ourselves.
