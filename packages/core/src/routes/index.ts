function loadRouter(): void {
  Router.route('/', function () {
    let req: any = this.request;
    let res: any = this.response;
    res.end('hello, world');
  }, {where: 'server'});
}

export { loadRouter }
