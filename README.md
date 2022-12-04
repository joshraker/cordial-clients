# Cordial Clients

## Usage

### Build clients

Single client:

```shell
make <generator-name>
```

All clients:

```shell
make
```

or

```shell
make all
```

The client will be placed in `clients/<generator-name>/client`.

### Extract template files for a generator

```shell
make tempalte-<generator-name>
```

The templates will be placed in the `.templates` directory. To alter a template,
copy it to the `clients/<generator-name>/templates` directory, then make the 
desired changes.

### Build example Docker image

```shell
make build-<generator-name>
```

Usually not used directly. A prerequisite of the `run-<generator-name>` target.

### Run the examples for a client

```shell
make run-<generator-name> CORDIAL_USERNAME='user' CORDIAL_PASSWORD='pass'
```

The examples use the provided credentials to log in, retrieve the newest game,
print the `Game` object and all the guesses that have been made, and, finally, 
log out. You can create an account quickly and easily at
https://cordial.joshraker.com and create a solo game to test.

See the `Makefile` for a list of clients that have an example.

## Learnings

- Do not use inheritance or composition with `allOf`. Most generators don't
  handle it properly and it's usually not necessary for a client. I haven't
  messed with `oneOf` or `anyOf` much but it's probably better to just use the
  [any type](https://swagger.io/docs/specification/data-models/data-types/#any)
  (`{}`) instead.
- Always provide a `title` for inline schemas so that the generated models will
  have a useful name. Otherwise, the generator may pick a name like
  `InlineRequest001` which makes it difficult to use the client directly. I
  believe this to be the primary reason we had to wrap the `go-deploy` client.
- The generated examples/docs are not always 100% accurate. Don't be surprised
  if you have to read the code for the client in order to determine how to use
  it. In other words, we may have to produce usable documentation for the
  clients ourselves or
  [edit the templates](https://openapi-generator.tech/docs/templating#modifying-templates)
  the generator uses to produce documentation.
- At times, we may want to add helper methods to models. For example, if a
  `Game`'s `Acceptor` and `Requester` are the same, it's a solo game. It would
  be nice to have a method on `Game` to check this. `go` is the only languages
  we're testing that can be easily extending in such a way. For languages where
  this is not possible, we may have to create helper methods separate from the
  model classes themselves. Alternatively, the server could return calculated
  values like this in the response, or we could edit the generator's templates.
  For these examples, I've opted to alter the templates to include a comment 
  that will be replaced with the contents of the corresponding file in
  `clients/<generator-name>/custom`.
