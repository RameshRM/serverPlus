REPORTER = spec
BASE = .
JSHINT = ./node_modules/.bin/jshint

all: lint test

test:
	@NODE_ENV=test _DEBUG=header:* ./node_modules/.bin/mocha \
	--reporter $(REPORTER)

lint:
	@$(JSHINT) ./lib/ \
	./test --config ./.jshintrc

.PHONY: test docs
