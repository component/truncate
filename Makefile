
build: components
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components template.js

all:
	clear
	make clean
	make

test:
	@./node_modules/.bin/mocha \
		--require should \
		--timeout 10s \
		--slow 3s \
		--bail \
		--reporter spec


.PHONY: clean test all
