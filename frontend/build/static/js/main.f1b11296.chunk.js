(this["webpackJsonpevax-frontend"] =
  this["webpackJsonpevax-frontend"] || []).push([
  [0],
  {
    263: function (e, t, a) {},
    33: function (e, t, a) {
      var r = a(430).default.create({
        baseURL: "http://localhost:4000",
        timeout: 5e3,
        headers: { "X-Custom-Header": "foobar" },
      });
      e.exports = r;
    },
    421: function (e, t, a) {},
    422: function (e, t, a) {},
    429: function (e, t, a) {},
    453: function (e, t, a) {},
    454: function (e, t, a) {},
    455: function (e, t, a) {},
    456: function (e, t, a) {},
    462: function (e, t, a) {},
    463: function (e, t, a) {},
    464: function (e, t, a) {},
    484: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(0),
        n = a.n(r),
        c = a(35),
        i = a.n(c),
        s = a(123),
        o = a(230),
        l = a(251),
        d = a(132),
        u = {
          order: ["navigator", "htmlTag", "path", "subdomain"],
          lookupQuerystring: "lng",
          lookupCookie: "i18next",
          lookupLocalStorage: "i18nextLng",
          lookupFromPathIndex: 0,
          lookupFromSubdomainIndex: 0,
          caches: ["localStorage", "cookie"],
          excludeCacheFor: ["cimode"],
          cookieMinutes: 10,
          cookieDomain: "myDomain",
          htmlTag: document.documentElement,
          checkWhitelist: !0,
        };
      s.a
        .use(o.a)
        .use(l.a)
        .use(d.e)
        .init({
          fallbackLng: ["en"],
          debug: !0,
          whitelist: ["en", "fr", "ar"],
          detection: u,
          interpolation: { escapeValue: !1 },
        });
      s.a, a(262);
      var j = a(50),
        b = a(38),
        h = a(490),
        p = a(491),
        x = a(248),
        m = a(51),
        O = a(497),
        f = a(498),
        v = (a(263), a.p + "static/media/image_gif.81acdd19.gif"),
        g = a(486),
        y = a(495),
        w = a(186),
        N = a(2);
      function C(e) {
        return Object(N.jsxs)(g.a, {
          className: "layout",
          style: { backgroundColor: "white" },
          children: [
            Object(N.jsxs)(w.Header, {
              style: {
                color: "white",
                fontSize: 25,
                backgroundColor: "#0096FF",
              },
              children: [
                Object(N.jsx)(O.a, { style: { marginRight: "2vw" } }),
                "Administrator Login Page",
              ],
            }),
            Object(N.jsxs)(w.Content, {
              style: { padding: "0 50px" },
              children: [
                Object(N.jsx)(y.a, { style: { margin: "16px 0" } }),
                e.children,
              ],
            }),
          ],
        });
      }
      var k = a(254);
      function E(e, t, a) {
        k.a[e]({ message: t, description: a });
      }
      function S() {
        var e = Object(b.f)();
        return Object(N.jsx)(C, {
          children: Object(N.jsxs)("div", {
            className: "page",
            children: [
              Object(N.jsxs)(h.a, {
                bordered: !0,
                hoverable: !0,
                className: "card-form",
                children: [
                  Object(N.jsx)("h1", {
                    className: "login-legend",
                    children: "Login ",
                  }),
                  Object(N.jsxs)(p.a, {
                    name: "normal_login",
                    className: "login-form",
                    initialValues: { remember: !0 },
                    onFinish: function (t) {
                      var a = t.password;
                      "admin" === t.username && "admin" === a
                        ? e.push("/dashboard")
                        : E(
                            "error",
                            "Login Problem",
                            "Wrong username or password"
                          );
                    },
                    children: [
                      Object(N.jsx)(p.a.Item, {
                        name: "username",
                        rules: [
                          {
                            required: !0,
                            message: "Please input your Username!",
                          },
                        ],
                        children: Object(N.jsx)(x.a, {
                          prefix: Object(N.jsx)(O.a, {
                            className: "site-form-item-icon",
                          }),
                          placeholder: "Username",
                        }),
                      }),
                      Object(N.jsx)(p.a.Item, {
                        name: "password",
                        rules: [
                          {
                            required: !0,
                            message: "Please input your Password!",
                          },
                        ],
                        children: Object(N.jsx)(x.a, {
                          prefix: Object(N.jsx)(f.a, {
                            className: "site-form-item-icon",
                          }),
                          type: "password",
                          placeholder: "Password",
                        }),
                      }),
                      Object(N.jsxs)(p.a.Item, {
                        children: [
                          Object(N.jsx)(m.a, {
                            type: "primary",
                            htmlType: "submit",
                            style: {
                              width: "30vw",
                              marginTop: "5vh",
                              marginLeft: "4vw",
                            },
                            className: "login-form-button",
                            children: "Connexion",
                          }),
                          Object(N.jsx)("br", {}),
                          Object(N.jsx)("br", {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(N.jsx)("img", {
                src: v,
                alt: "login animated",
                className: "image",
              }),
            ],
          }),
        });
      }
      a(421);
      var I = a(494);
      function R() {
        var e = Object(b.f)();
        return Object(N.jsx)("div", {
          className: "wrapper fadeInDown",
          children: Object(N.jsxs)("div", {
            id: "formContent",
            children: [
              Object(N.jsx)("h2", {
                className: "active",
                children: Object(N.jsx)("a", {
                  href: "/citoyen/login",
                  children: "Connexion",
                }),
              }),
              Object(N.jsx)("h2", {
                className: "inactive underlineHover",
                children: Object(N.jsx)("a", {
                  href: "/citoyen/insription",
                  children: "Inscription",
                }),
              }),
              Object(N.jsx)("br", {}),
              Object(N.jsx)("br", {}),
              Object(N.jsx)("div", {
                className: "fadeIn first",
                children: Object(N.jsx)(I.a, { icon: Object(N.jsx)(O.a, {}) }),
              }),
              Object(N.jsx)("br", {}),
              Object(N.jsxs)(p.a, {
                name: "normal_login",
                initialValues: { remember: !0 },
                onFinish: function () {
                  console.log("clicked"), e.push("/citoyen/profile");
                },
                children: [
                  Object(N.jsx)(x.a, {
                    type: "text",
                    id: "email",
                    className: "fadeIn second",
                    name: "email",
                    placeholder: "Votre mail",
                  }),
                  Object(N.jsx)("input", {
                    type: "password",
                    id: "password",
                    className: "fadeIn third",
                    name: "password",
                    placeholder: "Mot de passe",
                  }),
                  Object(N.jsx)("br", {}),
                  " ",
                  Object(N.jsx)("br", {}),
                  Object(N.jsx)("input", {
                    type: "submit",
                    className: "fadeIn fourth",
                    value: "Connexion",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var A = a(6),
        _ = a(499),
        L = a(500),
        T = a(501),
        D = a(502),
        P = a(503),
        z = a(78),
        V = (a(422), a(133)),
        F = a.n(V),
        U = g.a.Header,
        q = g.a.Sider,
        M = g.a.Content;
      function B(e) {
        var t = Object(r.useState)(!1),
          a = Object(A.a)(t, 2),
          n = a[0],
          c = a[1];
        return Object(N.jsxs)(g.a, {
          style: { minHeight: "100vh", height: "auto" },
          children: [
            Object(N.jsxs)(q, {
              trigger: null,
              collapsible: !0,
              collapsed: n,
              style: { padding: 0 },
              children: [
                Object(N.jsx)("div", {
                  className: "logo",
                  children: n
                    ? ""
                    : Object(N.jsx)("p", { children: "Admin Dashboard" }),
                }),
                Object(N.jsxs)(z.a, {
                  theme: "dark",
                  defaultSelectedKeys: ["1"],
                  mode: "inline",
                  children: [
                    Object(N.jsxs)(
                      F.a,
                      {
                        icon: Object(N.jsx)(_.a, {}),
                        title: "Pharmacies",
                        children: [
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)(j.b, {
                                to: "/dashboard/addPharmacy",
                                children: Object(N.jsx)("p", {
                                  children: "ADD Pharmacy",
                                }),
                              }),
                            },
                            "3"
                          ),
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)(j.b, {
                                to: "/dashboard/listPharmacies",
                                children: Object(N.jsx)("p", {
                                  children: "LIST of Pharmacy",
                                }),
                              }),
                            },
                            "4"
                          ),
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)("p", {
                                children: "MAYBE SOMETHING ELSE",
                              }),
                            },
                            "5"
                          ),
                        ],
                      },
                      "sub1"
                    ),
                    Object(N.jsxs)(
                      F.a,
                      {
                        icon: Object(N.jsx)(_.a, {}),
                        title: "Center",
                        children: [
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)(j.b, {
                                to: "/dashboard/addCenter",
                                children: Object(N.jsx)("p", {
                                  children: "Add Center",
                                }),
                              }),
                            },
                            "6"
                          ),
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)(j.b, {
                                to: "/dashboard/listCenters",
                                children: Object(N.jsx)("p", {
                                  children: "List of Centers",
                                }),
                              }),
                            },
                            "7"
                          ),
                        ],
                      },
                      "sub2"
                    ),
                    Object(N.jsxs)(
                      F.a,
                      {
                        icon: Object(N.jsx)(L.a, {}),
                        title: "Operator",
                        children: [
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)(j.b, {
                                to: "/dashboard/addOperator",
                                children: Object(N.jsx)("p", {
                                  children: "ADD Operator",
                                }),
                              }),
                            },
                            "8"
                          ),
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)(j.b, {
                                to: "/dashboard/listOperators",
                                children: Object(N.jsx)("p", {
                                  children: "LIST of Operator",
                                }),
                              }),
                            },
                            "9"
                          ),
                        ],
                      },
                      "sub3"
                    ),
                    Object(N.jsxs)(
                      F.a,
                      {
                        icon: Object(N.jsx)(L.a, {}),
                        title: "Volunteer",
                        children: [
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)(j.b, {
                                to: "/dashboard/addVolunteer",
                                children: Object(N.jsx)("p", {
                                  children: "ADD Volunteer",
                                }),
                              }),
                            },
                            "10"
                          ),
                          Object(N.jsx)(
                            z.a.Item,
                            {
                              children: Object(N.jsx)(j.b, {
                                to: "/dashboard/listVolunteers",
                                children: Object(N.jsx)("p", {
                                  children: "LIST Volunteer",
                                }),
                              }),
                            },
                            "11"
                          ),
                        ],
                      },
                      "sub4"
                    ),
                    Object(N.jsx)(
                      z.a.Item,
                      { icon: Object(N.jsx)(T.a, {}), children: "Files" },
                      "9"
                    ),
                  ],
                }),
              ],
            }),
            Object(N.jsxs)(g.a, {
              className: "site-layout",
              children: [
                Object(N.jsx)(U, {
                  className: "site-layout-background-header",
                  children: n
                    ? Object(N.jsx)(D.a, {
                        className: "trigger",
                        onClick: function () {
                          return c(!n);
                        },
                      })
                    : Object(N.jsx)(P.a, {
                        className: "trigger",
                        onClick: function () {
                          return c(!n);
                        },
                      }),
                }),
                Object(N.jsx)(M, {
                  className: "site-layout-background-content",
                  style: { margin: "24px 16px", padding: 24, minHeight: 280 },
                  children: e.children,
                }),
              ],
            }),
          ],
        });
      }
      var H = a(9),
        W = a.n(H),
        Y = a(15),
        G = a(36),
        Z = a(487),
        J = a(488),
        K = a(493),
        Q = a(489),
        X = (a(429), a(33)),
        $ = a.n(X),
        ee = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t) {
              var a;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.get("pharmacy/all", {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (a = e.sent), e.abrupt("return", a);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        te = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a) {
              var r;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.post("pharmacy", t, {
                          headers: { Authorization: "Bearer " + a },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt("return", r);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        ae = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a, r) {
              var n;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.put("pharmacy/" + r, a, {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (n = e.sent), e.abrupt("return", n);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a, r) {
            return e.apply(this, arguments);
          };
        })(),
        re = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a) {
              var r;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.delete("pharmacy/" + a, {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt("return", r);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        ne = "ADD_PHARMACY_SUCCESS",
        ce = "ADD_PHARMACY_ERROR",
        ie = "FETCH_PHARMACY_SUCCESS",
        se = "FETCH_PHARMACY_LOADING",
        oe = "FETCH_PHARMACY_ERROR",
        le = "DELETE_PHARMACY_SUCCESS",
        de = "DELETE_PHARMACY_ERROR",
        ue = "UPDATE_PHARMACY_SUCCESS",
        je = "UPDATE_PHARMACY_ERROR",
        be = function (e) {
          return { type: ie, payload: e };
        },
        he = function () {
          return { type: se };
        },
        pe = function (e) {
          return { type: oe, payload: e };
        },
        xe = function (e) {
          return { type: ce, payload: e };
        },
        me = function (e) {
          return { type: de, payload: e };
        },
        Oe = function (e, t) {
          return { type: ue, payload: { id: e, pharmacyData: t } };
        },
        fe = function (e) {
          return (function () {
            var t = Object(Y.a)(
              W.a.mark(function t(a) {
                var r;
                return W.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), te(e, "");
                        case 3:
                          (r = t.sent),
                            a(((n = r.data), { type: ne, payload: n })),
                            (t.next = 10);
                          break;
                        case 7:
                          (t.prev = 7), (t.t0 = t.catch(0)), a(xe(t.t0));
                        case 10:
                        case "end":
                          return t.stop();
                      }
                    var n;
                  },
                  t,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ve = function (e, t) {
          return (function () {
            var a = Object(Y.a)(
              W.a.mark(function a(r) {
                var n;
                return W.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            r(he()), (a.prev = 1), (a.next = 4), ae("", t, e)
                          );
                        case 4:
                          return (a.next = 6), ee("");
                        case 6:
                          (n = a.sent),
                            r(Oe(e, t)),
                            r(be(n.data)),
                            (a.next = 15);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(1)),
                            r(((c = a.t0), { type: je, payload: c })),
                            r(pe(a.t0));
                        case 15:
                        case "end":
                          return a.stop();
                      }
                    var c;
                  },
                  a,
                  null,
                  [[1, 11]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        };
      function ge() {
        var e = Object(G.b)(),
          t = Object(G.c)(function (e) {
            return e.pharmacy;
          });
        Object(r.useEffect)(
          function () {
            e(
              (function () {
                var e = Object(Y.a)(
                  W.a.mark(function e(t) {
                    var a;
                    return W.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t(he()), (e.prev = 1), (e.next = 4), ee("")
                              );
                            case 4:
                              (a = e.sent), t(be(a.data)), (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(1)), t(pe(e.t0));
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            );
          },
          [e]
        );
        var a = [
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Address", dataIndex: "address", key: "address" },
            { title: "Owner", dataIndex: "owner", key: "owner" },
            {
              title: "Action",
              dataIndex: "",
              key: "x",
              render: function (t, a) {
                return Object(N.jsxs)("div", {
                  style: { display: "flex", justifyContent: "space-evenly" },
                  children: [
                    Object(N.jsx)(Z.a, {
                      title: "Sure to delete?",
                      onConfirm: function () {
                        return e(
                          (function (e) {
                            return (function () {
                              var t = Object(Y.a)(
                                W.a.mark(function t(a) {
                                  return W.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              (t.next = 3),
                                              re("", e)
                                            );
                                          case 3:
                                            a({ type: le, payload: e }),
                                              (t.next = 9);
                                            break;
                                          case 6:
                                            (t.prev = 6),
                                              (t.t0 = t.catch(0)),
                                              a(me(t.t0));
                                          case 9:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 6]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(a._id)
                        );
                      },
                      children: Object(N.jsx)(m.a, {
                        danger: !0,
                        children: "Delete",
                      }),
                    }),
                    Object(N.jsx)(m.a, {
                      type: "primary",
                      onClick: function () {
                        !(function (e) {
                          var t = e._id,
                            a = e.name,
                            r = e.owner,
                            n = e.address;
                          v(a), C(r), T(t), I(n.split("/"));
                        })(a),
                          D();
                      },
                      children: "Update",
                    }),
                  ],
                });
              },
            },
          ],
          c = n.a.useState(!1),
          i = Object(A.a)(c, 2),
          s = i[0],
          o = i[1],
          l = n.a.useState(!1),
          d = Object(A.a)(l, 2),
          u = d[0],
          j = d[1],
          b = n.a.useState(""),
          O = Object(A.a)(b, 2),
          f = O[0],
          v = O[1],
          g = n.a.useState(""),
          y = Object(A.a)(g, 2),
          w = y[0],
          C = y[1],
          k = n.a.useState([]),
          E = Object(A.a)(k, 2),
          S = E[0],
          I = E[1],
          R = Object(r.useState)(""),
          _ = Object(A.a)(R, 2),
          L = _[0],
          T = _[1],
          D = function () {
            o(!0);
          },
          P = (function () {
            var t = Object(Y.a)(
              W.a.mark(function t() {
                return W.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        j(!0),
                          e(ve(L, { name: f, owner: w, address: S.join(" ") })),
                          o(!1),
                          j(!1),
                          I("");
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return Object(N.jsxs)(h.a, {
          children: [
            Object(N.jsx)("h1", {
              style: {
                display: "inline-block",
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: 25,
                letterSpacing: 5,
                borderStyle: "solid ",
                borderWidth: 2,
                backgroundColor: "white",
                marginLeft: "23vw",
                marginBottom: "10vh",
                paddingLeft: "2vh",
                paddingRight: "2vh",
              },
              children: "List Pharmacy",
            }),
            Object(N.jsx)("br", {}),
            Object(N.jsx)(J.a, {
              columns: a,
              dataSource: t.listPharmacy,
              bordered: !0,
              loading: t.loading,
              pagination: {
                defaultPageSize: 3,
                showSizeChanger: !0,
                pageSizeOptions: ["3", "6", "9"],
              },
            }),
            Object(N.jsx)(K.a, {
              width: "50vw",
              centered: !0,
              title: "Update Pharmacy",
              visible: s,
              onOk: P,
              confirmLoading: u,
              onCancel: function () {
                o(!1);
              },
              children: Object(N.jsxs)(p.a, {
                style: { height: "35vh", width: "55vw" },
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                layout: "horizontal",
                initialValues: { size: "large" },
                size: "large",
                children: [
                  Object(N.jsx)(p.a.Item, {
                    label: "Pharmacy Name",
                    name: "name",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: f,
                      onChange: function (e) {
                        return v(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Owner",
                    name: "owner",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: w,
                      onChange: function (e) {
                        return C(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Cascader",
                    name: "address",
                    children: Object(N.jsx)(Q.a, {
                      defaultValue: S,
                      onChange: function (e) {
                        return I(e);
                      },
                      options: [
                        {
                          value: "ariana",
                          label: "Ariana",
                          children: [
                            { value: "grande ariana", label: "Grande Ariana" },
                            {
                              value: "petite ariana",
                              label: "Petite Ariana :D",
                            },
                            { value: "sokra", label: "Sokra" },
                          ],
                        },
                      ],
                    }),
                  }),
                  Object(N.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                  }),
                ],
              }),
            }),
          ],
        });
      }
      a(453);
      function ye() {
        var e = Object(G.b)(),
          t = p.a.useForm(),
          a = Object(A.a)(t, 1)[0],
          r = Object(b.f)(),
          n = (function () {
            var t = Object(Y.a)(
              W.a.mark(function t(n) {
                var c, i, s, o;
                return W.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (c = n.name),
                          (i = n.owner),
                          (s = n.address),
                          c && i && s
                            ? ((o = s.join(" ")),
                              e(fe({ name: c, owner: i, address: o })),
                              r.push("/dashboard/listPharmacies"))
                            : E(
                                "error",
                                "Missing Data",
                                "You need to fill the up all the inputs"
                              ),
                          a.resetFields();
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return Object(N.jsx)("div", {
          className: "container",
          children: Object(N.jsxs)(h.a, {
            bordered: !0,
            className: "card-form",
            children: [
              Object(N.jsx)("h1", {
                style: {
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: 25,
                  letterSpacing: 5,
                  borderStyle: "solid ",
                  borderWidth: 2,
                  backgroundColor: "white",
                  marginLeft: "23vw",
                  marginBottom: "10vh",
                  paddingLeft: "2vh",
                  paddingRight: "2vh",
                },
                children: "ADD Pharmacy",
              }),
              Object(N.jsxs)(p.a, {
                form: a,
                onFinish: function (e) {
                  n(e);
                },
                style: { marginLeft: "12vw", height: "20vh", width: "50vw" },
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                layout: "horizontal",
                initialValues: { size: "large" },
                size: "large",
                children: [
                  Object(N.jsx)(p.a.Item, {
                    label: "Pharmacy Name",
                    name: "name",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Owner",
                    name: "owner",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Address",
                    name: "address",
                    children: Object(N.jsx)(Q.a, {
                      options: [
                        {
                          value: "Ariana",
                          label: "Ariana",
                          children: [
                            { value: "Grande Ariana", label: "Grande Ariana" },
                            {
                              value: "Petite Ariana :D",
                              label: "Petite Ariana :D",
                            },
                            { value: "Sokra", label: "Sokra" },
                          ],
                        },
                      ],
                    }),
                  }),
                  Object(N.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                    children: Object(N.jsx)(m.a, {
                      style: { marginRight: "6vw", marginTop: "5vh" },
                      type: "primary",
                      htmlType: "submit",
                      children: "Ajouter Pharmacy",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var we = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t) {
              var a;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.get("centers/all", {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (a = e.sent), e.abrupt("return", a);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ne = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a) {
              var r;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.post("centers", t, {
                          headers: { Authorization: "Bearer " + a },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt("return", r);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        Ce = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a, r) {
              var n;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.put("centers/" + r, a, {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (n = e.sent), e.abrupt("return", n);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a, r) {
            return e.apply(this, arguments);
          };
        })(),
        ke = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a) {
              var r;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.delete("centers/" + a, {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt("return", r);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        Ee = "ADD_CENTER_SUCCESS",
        Se = "ADD_CENTER_ERROR",
        Ie = "FETCH_CENTER_SUCCESS",
        Re = "FETCH_CENTER_LOADING",
        Ae = "FETCH_CENTER_ERROR",
        _e = "DELETE_CENTER_SUCCESS",
        Le = "DELETE_CENTER_ERROR",
        Te = "UPDATE_CENTER_SUCCESS",
        De = "UPDATE_CENTER_ERROR",
        Pe = function (e) {
          return { type: Ie, payload: e };
        },
        ze = function () {
          return { type: Re };
        },
        Ve = function (e) {
          return { type: Ae, payload: e };
        },
        Fe = function (e) {
          return { type: Se, payload: e };
        },
        Ue = function (e) {
          return { type: Le, payload: e };
        },
        qe = function (e, t) {
          return { type: Te, payload: { id: e, center: t } };
        },
        Me = function (e, t) {
          return (function () {
            var a = Object(Y.a)(
              W.a.mark(function a(r) {
                var n;
                return W.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            r(ze()), (a.prev = 1), (a.next = 4), Ce("", t, e)
                          );
                        case 4:
                          return (a.next = 6), we("");
                        case 6:
                          (n = a.sent),
                            r(qe(e, t)),
                            r(Pe(n.data)),
                            (a.next = 15);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(1)),
                            r(((c = a.t0), { type: De, payload: c })),
                            r(Ve(a.t0));
                        case 15:
                        case "end":
                          return a.stop();
                      }
                    var c;
                  },
                  a,
                  null,
                  [[1, 11]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        };
      a(454);
      function Be() {
        var e = [
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Address", dataIndex: "address", key: "address" },
            {
              title: "Action",
              dataIndex: "",
              key: "x",
              render: function (e, a) {
                return Object(N.jsxs)("div", {
                  style: { display: "flex", justifyContent: "space-evenly" },
                  children: [
                    Object(N.jsx)(Z.a, {
                      title: "Sure to delete?",
                      onConfirm: function () {
                        return t(
                          (function (e) {
                            return (function () {
                              var t = Object(Y.a)(
                                W.a.mark(function t(a) {
                                  return W.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              (t.next = 3),
                                              ke("", e)
                                            );
                                          case 3:
                                            a({ type: _e, payload: e }),
                                              (t.next = 9);
                                            break;
                                          case 6:
                                            (t.prev = 6),
                                              (t.t0 = t.catch(0)),
                                              a(Ue(t.t0));
                                          case 9:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 6]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(a._id)
                        );
                      },
                      children: Object(N.jsx)(m.a, {
                        danger: !0,
                        children: "Delete",
                      }),
                    }),
                    Object(N.jsx)(m.a, {
                      type: "primary",
                      onClick: function () {
                        c(a), _();
                      },
                      children: "Update",
                    }),
                  ],
                });
              },
            },
          ],
          t = Object(G.b)(),
          a = Object(G.c)(function (e) {
            return e.center;
          });
        Object(r.useEffect)(
          function () {
            t(
              (function () {
                var e = Object(Y.a)(
                  W.a.mark(function e(t) {
                    var a;
                    return W.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t(ze()), (e.prev = 1), (e.next = 4), we("")
                              );
                            case 4:
                              (a = e.sent), t(Pe(a.data)), (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(1)), t(Ve(e.t0));
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            );
          },
          [t]
        );
        var c = function (e) {
            var t = e._id,
              a = e.name,
              r = e.address;
            g(a), R(t), k(r.split("/"));
          },
          i = n.a.useState(!1),
          s = Object(A.a)(i, 2),
          o = s[0],
          l = s[1],
          d = n.a.useState(!1),
          u = Object(A.a)(d, 2),
          j = u[0],
          b = u[1],
          O = n.a.useState(""),
          f = Object(A.a)(O, 2),
          v = f[0],
          g = f[1],
          y = n.a.useState([]),
          w = Object(A.a)(y, 2),
          C = w[0],
          k = w[1],
          E = Object(r.useState)(""),
          S = Object(A.a)(E, 2),
          I = S[0],
          R = S[1],
          _ = function () {
            l(!0);
          },
          L = (function () {
            var e = Object(Y.a)(
              W.a.mark(function e() {
                return W.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        b(!0),
                          t(Me(I, { name: v, address: C.join(" ") })),
                          l(!1),
                          b(!1),
                          k("");
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(N.jsxs)(N.Fragment, {
          children: [
            Object(N.jsxs)(h.a, {
              title: "List centers",
              children: [
                Object(N.jsx)(J.a, {
                  columns: e,
                  dataSource: a.centersList,
                  bordered: !0,
                  loading: a.loading,
                  pagination: {
                    defaultPageSize: 3,
                    showSizeChanger: !0,
                    pageSizeOptions: ["3", "6", "9"],
                  },
                }),
                Object(N.jsxs)(K.a, {
                  width: "50vw",
                  centered: !0,
                  title: "Update Center",
                  visible: o,
                  onOk: L,
                  confirmLoading: j,
                  onCancel: function () {
                    l(!1);
                  },
                  children: [
                    " ",
                    Object(N.jsxs)(p.a, {
                      style: { height: "35vh", width: "55vw" },
                      labelCol: { span: 4 },
                      wrapperCol: { span: 14 },
                      layout: "horizontal",
                      initialValues: { size: "large" },
                      size: "large",
                      children: [
                        Object(N.jsx)(p.a.Item, {
                          label: "Center Name",
                          name: "name",
                          children: Object(N.jsx)(x.a, {
                            required: !0,
                            defaultValue: v,
                            onChange: function (e) {
                              return g(e.target.value);
                            },
                          }),
                        }),
                        Object(N.jsx)(p.a.Item, {
                          label: "Cascader",
                          name: "address",
                          children: Object(N.jsx)(Q.a, {
                            defaultValue: C,
                            onChange: function (e) {
                              return k(e);
                            },
                            options: [
                              {
                                value: "ariana",
                                label: "Ariana",
                                children: [
                                  {
                                    value: "grande ariana",
                                    label: "Grande Ariana",
                                  },
                                  {
                                    value: "petite ariana",
                                    label: "Petite Ariana :D",
                                  },
                                  { value: "sokra", label: "Sokra" },
                                ],
                              },
                            ],
                          }),
                        }),
                        Object(N.jsx)("div", {
                          style: { display: "flex", justifyContent: "center" },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(N.jsx)("br", {}),
          ],
        });
      }
      function He() {
        var e = p.a.useForm(),
          t = Object(A.a)(e, 1)[0],
          a = Object(b.f)(),
          r = Object(G.b)(),
          n = function (e) {
            var n,
              c = e.name,
              i = e.address;
            if (c && i) {
              var s = i.join(" ");
              r(
                ((n = { name: c, address: s }),
                (function () {
                  var e = Object(Y.a)(
                    W.a.mark(function e(t) {
                      var a;
                      return W.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), Ne(n, "");
                              case 3:
                                (a = e.sent),
                                  t(((r = a.data), { type: Ee, payload: r })),
                                  (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7), (e.t0 = e.catch(0)), t(Fe(e.t0));
                              case 10:
                              case "end":
                                return e.stop();
                            }
                          var r;
                        },
                        e,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })())
              ),
                a.push("/dashboard/listCenters");
            } else
              E(
                "error",
                "Missing Data",
                "You need to fill the up all the inputs"
              );
            t.resetFields();
          };
        return Object(N.jsx)(N.Fragment, {
          children: Object(N.jsx)(h.a, {
            title: "Add center",
            children: Object(N.jsxs)(p.a, {
              form: t,
              onFinish: function (e) {
                n(e);
              },
              style: { height: "20vh", width: "50vw" },
              labelCol: { span: 4 },
              wrapperCol: { span: 14 },
              layout: "horizontal",
              initialValues: { size: "large" },
              size: "large",
              children: [
                Object(N.jsx)(p.a.Item, {
                  label: "Center Name",
                  name: "name",
                  children: Object(N.jsx)(x.a, { required: !0 }),
                }),
                Object(N.jsx)(p.a.Item, {
                  label: "Cascader",
                  name: "address",
                  children: Object(N.jsx)(Q.a, {
                    options: [
                      {
                        value: "Ariana",
                        label: "Ariana",
                        children: [
                          { value: "Grande Ariana", label: "Grande Ariana" },
                          {
                            value: "Petite Ariana :D",
                            label: "Petite Ariana :D",
                          },
                          { value: "Sokra", label: "Sokra" },
                        ],
                      },
                    ],
                  }),
                }),
                " ",
                Object(N.jsx)("div", {
                  children: Object(N.jsx)(m.a, {
                    style: { float: "left" },
                    type: "primary",
                    htmlType: "submit",
                    children: "Add center",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      a(455);
      var We = "FETCH_OPERATOR_SUCCESS",
        Ye = "FETCH_OPERATOR_LOADING",
        Ge = "FETCH_OPERATOR_ERROR",
        Ze = "ADD_OPERATOR_SUCCESS",
        Je = "ADD_OPERATOR_ERROR",
        Ke = "DELETE_OPERATOR_SUCCESS",
        Qe = "DELETE_OPERATOR_ERROR",
        Xe = "UPDATE_OPERATOR_SUCCESS",
        $e = "UPDATE_OPERATOR_ERROR",
        et = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t) {
              var a;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.get("operator/all", {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (a = e.sent), e.abrupt("return", a);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        tt = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a) {
              var r;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.post("operator", t, {
                          headers: { Authorization: "Bearer " + a },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt("return", r);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        at = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a, r) {
              var n;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.put("operator/" + r, a, {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (n = e.sent), e.abrupt("return", n);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a, r) {
            return e.apply(this, arguments);
          };
        })(),
        rt = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a) {
              var r;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.delete("operator/" + a, {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt("return", r);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        nt = function (e) {
          return { type: Ge, payload: e };
        },
        ct = function () {
          return { type: Ye };
        },
        it = function (e) {
          return { type: We, payload: e };
        },
        st = function (e) {
          return { type: Je, payload: e };
        },
        ot = function (e) {
          return { type: Qe, payload: e };
        },
        lt = function (e, t) {
          return { type: Xe, payload: { id: e, operatorData: t } };
        },
        dt = function (e) {
          return (function () {
            var t = Object(Y.a)(
              W.a.mark(function t(a) {
                var r;
                return W.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), tt(e, "");
                        case 3:
                          (r = t.sent),
                            a(((n = r.data), { type: Ze, payload: n })),
                            (t.next = 10);
                          break;
                        case 7:
                          (t.prev = 7), (t.t0 = t.catch(0)), a(st(t.t0));
                        case 10:
                        case "end":
                          return t.stop();
                      }
                    var n;
                  },
                  t,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ut = function (e, t) {
          return (function () {
            var a = Object(Y.a)(
              W.a.mark(function a(r) {
                var n;
                return W.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            r(ct()), (a.prev = 1), (a.next = 4), at("", t, e)
                          );
                        case 4:
                          return (a.next = 6), et("");
                        case 6:
                          (n = a.sent),
                            r(lt(e, t)),
                            r(it(n.data)),
                            (a.next = 15);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(1)),
                            r(((c = a.t0), { type: $e, payload: c })),
                            r(nt(a.t0));
                        case 15:
                        case "end":
                          return a.stop();
                      }
                    var c;
                  },
                  a,
                  null,
                  [[1, 11]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        };
      function jt() {
        var e = Object(G.b)(),
          t = Object(G.c)(function (e) {
            return e.operator;
          });
        Object(r.useEffect)(
          function () {
            e(
              (function () {
                var e = Object(Y.a)(
                  W.a.mark(function e(t) {
                    var a;
                    return W.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t(ct()), (e.prev = 1), (e.next = 4), et("")
                              );
                            case 4:
                              (a = e.sent), t(it(a.data)), (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(1)), t(nt(e.t0));
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            );
          },
          [e]
        );
        var a = [
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Password", dataIndex: "password", key: "password" },
            { title: "Tel", dataIndex: "tel", key: "tel" },
            { title: "Cin", dataIndex: "cin", key: "cin" },
            {
              title: "Action",
              dataIndex: "",
              key: "x",
              render: function (t, a) {
                return Object(N.jsxs)("div", {
                  style: { display: "flex", justifyContent: "space-evenly" },
                  children: [
                    Object(N.jsx)(Z.a, {
                      title: "Sure to delete?",
                      onConfirm: function () {
                        return e(
                          (function (e) {
                            return (function () {
                              var t = Object(Y.a)(
                                W.a.mark(function t(a) {
                                  return W.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              (t.next = 3),
                                              rt("", e)
                                            );
                                          case 3:
                                            a({ type: Ke, payload: e }),
                                              (t.next = 9);
                                            break;
                                          case 6:
                                            (t.prev = 6),
                                              (t.t0 = t.catch(0)),
                                              a(ot(t.t0));
                                          case 9:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 6]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(a._id)
                        );
                      },
                      children: Object(N.jsx)(m.a, {
                        danger: !0,
                        children: "Delete",
                      }),
                    }),
                    Object(N.jsx)(m.a, {
                      type: "primary",
                      onClick: function () {
                        !(function (e) {
                          var t = e._id,
                            a = e.name,
                            r = e.password,
                            n = e.tel,
                            c = e.cin;
                          v(a), C(r), I(n), T(c), V(t);
                        })(a),
                          F();
                      },
                      children: "Update",
                    }),
                  ],
                });
              },
            },
          ],
          c = n.a.useState(!1),
          i = Object(A.a)(c, 2),
          s = i[0],
          o = i[1],
          l = n.a.useState(!1),
          d = Object(A.a)(l, 2),
          u = d[0],
          j = d[1],
          b = n.a.useState(""),
          O = Object(A.a)(b, 2),
          f = O[0],
          v = O[1],
          g = n.a.useState(""),
          y = Object(A.a)(g, 2),
          w = y[0],
          C = y[1],
          k = n.a.useState([]),
          E = Object(A.a)(k, 2),
          S = E[0],
          I = E[1],
          R = n.a.useState([]),
          _ = Object(A.a)(R, 2),
          L = _[0],
          T = _[1],
          D = Object(r.useState)(""),
          P = Object(A.a)(D, 2),
          z = P[0],
          V = P[1],
          F = function () {
            o(!0);
          },
          U = (function () {
            var t = Object(Y.a)(
              W.a.mark(function t() {
                return W.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        j(!0),
                          e(ut(z, { name: f, password: w, tel: S, cin: L })),
                          o(!1),
                          j(!1);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return Object(N.jsxs)(h.a, {
          children: [
            Object(N.jsx)("h1", {
              style: {
                display: "inline-block",
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: 25,
                letterSpacing: 5,
                borderStyle: "solid ",
                borderWidth: 2,
                backgroundColor: "white",
                marginLeft: "23vw",
                marginBottom: "10vh",
                paddingLeft: "2vh",
                paddingRight: "2vh",
              },
              children: "List Operator",
            }),
            Object(N.jsx)("br", {}),
            Object(N.jsx)(J.a, {
              columns: a,
              dataSource: t.listOperator,
              bordered: !0,
              loading: t.loading,
              pagination: {
                defaultPageSize: 3,
                showSizeChanger: !0,
                pageSizeOptions: ["3", "6", "9"],
              },
            }),
            Object(N.jsx)(K.a, {
              width: "50vw",
              centered: !0,
              title: "Update Operator",
              visible: s,
              onOk: U,
              confirmLoading: u,
              onCancel: function () {
                o(!1);
              },
              children: Object(N.jsxs)(p.a, {
                style: { height: "35vh", width: "55vw" },
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                layout: "horizontal",
                initialValues: { size: "large" },
                size: "large",
                children: [
                  Object(N.jsx)(p.a.Item, {
                    label: "Operator Name",
                    name: "name",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: f,
                      onChange: function (e) {
                        return v(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Password",
                    name: "password",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: w,
                      onChange: function (e) {
                        return C(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Tel",
                    name: "tel",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: S,
                      onChange: function (e) {
                        return I(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Cin",
                    name: "cin",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: L,
                      onChange: function (e) {
                        return T(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                  }),
                ],
              }),
            }),
          ],
        });
      }
      a(456);
      function bt() {
        var e = Object(G.b)(),
          t = p.a.useForm(),
          a = Object(A.a)(t, 1)[0],
          r = Object(b.f)(),
          n = (function () {
            var t = Object(Y.a)(
              W.a.mark(function t(n) {
                var c, i, s, o;
                return W.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (c = n.name),
                          (i = n.password),
                          (s = n.tel),
                          (o = n.cin),
                          c && i && s && o
                            ? (e(dt({ name: c, password: i, tel: s, cin: o })),
                              r.push("/dashboard/listOperators"))
                            : E(
                                "error",
                                "Missing Data",
                                "You need to fill the up all the inputs"
                              ),
                          a.resetFields();
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return Object(N.jsx)("div", {
          className: "container",
          children: Object(N.jsxs)(h.a, {
            bordered: !0,
            className: "card-form",
            children: [
              Object(N.jsx)("h1", {
                style: {
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: 25,
                  letterSpacing: 5,
                  borderStyle: "solid ",
                  borderWidth: 2,
                  backgroundColor: "white",
                  marginLeft: "23vw",
                  marginBottom: "10vh",
                  paddingLeft: "2vh",
                  paddingRight: "2vh",
                },
                children: "ADD Operator",
              }),
              Object(N.jsxs)(p.a, {
                form: a,
                onFinish: function (e) {
                  n(e);
                },
                style: { marginLeft: "12vw", height: "20vh", width: "50vw" },
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                layout: "horizontal",
                initialValues: { size: "large" },
                size: "large",
                children: [
                  Object(N.jsx)(p.a.Item, {
                    label: "Operator Name",
                    name: "name",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Password",
                    name: "password",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Tel",
                    name: "tel",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Cin",
                    name: "cin",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                    children: Object(N.jsx)(m.a, {
                      style: { marginRight: "6vw", marginTop: "5vh" },
                      type: "primary",
                      htmlType: "submit",
                      children: "Ajouter Operator",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var ht = a.p + "static/media/img1.84b5098f.jpg",
        pt = a(492),
        xt = a(496);
      function mt() {
        var e = Object(xt.a)().t,
          t = function (e) {
            console.log(e), s.a.changeLanguage(e);
          };
        return Object(N.jsxs)(N.Fragment, {
          children: [
            Object(N.jsx)("link", {
              rel: "stylesheet",
              href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            }),
            Object(N.jsx)("header", {
              className: "text-gray-700 body-font border-b border-gray-200",
              children: Object(N.jsxs)("div", {
                className:
                  "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
                children: [
                  Object(N.jsxs)("a", {
                    href: "/",
                    className:
                      "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
                    children: [
                      Object(N.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        className:
                          "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",
                        viewBox: "0 0 24 24",
                        children: Object(N.jsx)("path", {
                          d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                        }),
                      }),
                      Object(N.jsxs)("span", {
                        className: "ml-3 text-xl",
                        children: [e("Titre.1"), " :)"],
                      }),
                    ],
                  }),
                  Object(N.jsxs)("nav", {
                    className:
                      "md:ml-auto flex flex-wrap items-center text-base justify-center",
                    children: [
                      Object(N.jsx)("a", {
                        className: "mr-5 hover:text-gray-900",
                        href: "#accueil",
                        children: e("Navigation.1"),
                      }),
                      Object(N.jsx)("a", {
                        className: "mr-5 hover:text-gray-900",
                        href: "#info",
                        children: e("Navigation.2"),
                      }),
                      Object(N.jsx)("a", {
                        className: "mr-5 hover:text-gray-900",
                        href: "#etapes",
                        children: e("Navigation.3"),
                      }),
                      Object(N.jsx)("a", {
                        className: "mr-5 hover:text-gray-900",
                        href: "#contact",
                        children: e("Navigation.4"),
                      }),
                    ],
                  }),
                  Object(N.jsxs)("a", {
                    href: "/citoyen/login",
                    className:
                      "inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0",
                    children: [
                      e("Navigation.5"),
                      Object(N.jsx)("svg", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        className: "w-4 h-4 ml-1",
                        viewBox: "0 0 24 24",
                        children: Object(N.jsx)("path", {
                          d: "M5 12h14M12 5l7 7-7 7",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(N.jsxs)("div", {
              style: {
                display: "block",
                width: "100%",
                zIndex: 9999,
                position: "fixed",
                right: "-95%",
                top: "200px",
              },
              children: [
                Object(N.jsx)("button", {
                  onClick: function () {
                    return t("ar");
                  },
                  className:
                    "bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                  type: "button",
                  children: "Ar",
                }),
                Object(N.jsx)("br", {}),
                Object(N.jsx)("button", {
                  onClick: function () {
                    return t("en");
                  },
                  className:
                    "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                  type: "button",
                  children: "En",
                }),
                Object(N.jsx)("br", {}),
                Object(N.jsx)("button", {
                  onClick: function () {
                    return t("fr");
                  },
                  className:
                    "bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                  type: "button",
                  children: "Fr",
                }),
                Object(N.jsx)("br", {}),
              ],
            }),
          ],
        });
      }
      var Ot = pt.a.Step;
      function ft() {
        var e = Object(xt.a)().t;
        return Object(N.jsxs)(N.Fragment, {
          children: [
            Object(N.jsx)("link", {
              rel: "stylesheet",
              href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            }),
            Object(N.jsx)(mt, {}),
            Object(N.jsx)("section", {
              className: "text-gray-700 body-font",
              id: "accueil",
              children: Object(N.jsxs)("div", {
                className:
                  "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",
                children: [
                  Object(N.jsxs)("div", {
                    className:
                      "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",
                    children: [
                      Object(N.jsx)("h1", {
                        className:
                          "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",
                        children: e("Pourquoi.1"),
                      }),
                      Object(N.jsx)("p", {
                        className: "mb-8 leading-relaxed text-justify",
                        style: { fontSize: "18px" },
                        children: e("Pourquoi.2"),
                      }),
                    ],
                  }),
                  Object(N.jsx)("div", {
                    className: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6",
                    children: Object(N.jsx)("img", {
                      className: "object-cover object-center rounded",
                      alt: "hero",
                      src: ht,
                    }),
                  }),
                ],
              }),
            }),
            Object(N.jsxs)("section", {
              className: "text-gray-700 body-font border-t border-gray-200",
              id: "info",
              children: [
                Object(N.jsx)("h3", {
                  className:
                    "title-font sm:text-4xl text-3xl mt-4 font-medium text-gray-800",
                  style: { marginLeft: "2%" },
                  children: e("Informations.1"),
                }),
                Object(N.jsxs)("div", {
                  className: "container px-5 py-24 mx-auto",
                  children: [
                    Object(N.jsx)("div", {
                      className:
                        "flex flex-wrap w-full mb-20 flex-col items-center text-center",
                    }),
                    Object(N.jsxs)("div", {
                      className: "flex flex-wrap -m-6",
                      children: [
                        Object(N.jsx)("div", {
                          className: "xl:w-1/3 md:w-1/2 p-4",
                          children: Object(N.jsxs)("div", {
                            className: "border border-gray-300 p-6 rounded-lg",
                            children: [
                              Object(N.jsx)("div", {
                                className:
                                  "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4",
                                children: Object(N.jsx)("svg", {
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  className: "w-6 h-6",
                                  viewBox: "0 0 24 24",
                                  children: Object(N.jsx)("path", {
                                    d: "M22 12h-4l-3 9L9 3l-3 9H2",
                                  }),
                                }),
                              }),
                              Object(N.jsx)("h2", {
                                className:
                                  "text-lg text-gray-900 font-medium title-font mb-2",
                                children: e("Informations.2"),
                              }),
                              Object(N.jsx)("p", {
                                className: "leading-relaxed text-base",
                                children: e("Informations.3"),
                              }),
                            ],
                          }),
                        }),
                        Object(N.jsx)("div", {
                          className: "xl:w-1/3 md:w-1/2 p-4",
                          children: Object(N.jsxs)("div", {
                            className: "border border-gray-300 p-6 rounded-lg",
                            children: [
                              Object(N.jsx)("div", {
                                className:
                                  "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4",
                                children: Object(N.jsxs)("svg", {
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  className: "w-6 h-6",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    Object(N.jsx)("circle", {
                                      cx: "6",
                                      cy: "6",
                                      r: "3",
                                    }),
                                    Object(N.jsx)("circle", {
                                      cx: "6",
                                      cy: "18",
                                      r: "3",
                                    }),
                                    Object(N.jsx)("path", {
                                      d: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12",
                                    }),
                                  ],
                                }),
                              }),
                              Object(N.jsx)("h2", {
                                className:
                                  "text-lg text-gray-900 font-medium title-font mb-2",
                                children: e("Informations.4"),
                              }),
                              Object(N.jsx)("p", {
                                className: "leading-relaxed text-base",
                                children: e("Informations.5"),
                              }),
                            ],
                          }),
                        }),
                        Object(N.jsx)("div", {
                          className: "xl:w-1/3 md:w-1/2 p-4",
                          children: Object(N.jsxs)("div", {
                            className: "border border-gray-300 p-6 rounded-lg",
                            children: [
                              Object(N.jsx)("div", {
                                className:
                                  "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4",
                                children: Object(N.jsxs)("svg", {
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  className: "w-6 h-6",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    Object(N.jsx)("path", {
                                      d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
                                    }),
                                    Object(N.jsx)("circle", {
                                      cx: "12",
                                      cy: "7",
                                      r: "4",
                                    }),
                                  ],
                                }),
                              }),
                              Object(N.jsx)("h2", {
                                className:
                                  "text-lg text-gray-900 font-medium title-font mb-2",
                                children: e("Informations.6"),
                              }),
                              Object(N.jsx)("p", {
                                className: "leading-relaxed text-base",
                                children: e("Informations.7"),
                              }),
                            ],
                          }),
                        }),
                        Object(N.jsx)("div", {
                          className: "xl:w-1/3 md:w-1/2 p-4",
                          children: Object(N.jsxs)("div", {
                            className: "border border-gray-300 p-6 rounded-lg",
                            children: [
                              Object(N.jsx)("div", {
                                className:
                                  "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4",
                                children: Object(N.jsx)("svg", {
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  className: "w-6 h-6",
                                  viewBox: "0 0 24 24",
                                  children: Object(N.jsx)("path", {
                                    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
                                  }),
                                }),
                              }),
                              Object(N.jsx)("h2", {
                                className:
                                  "text-lg text-gray-900 font-medium title-font mb-2",
                                children: e("Informations.8"),
                              }),
                              Object(N.jsx)("p", {
                                className: "leading-relaxed text-base",
                                children: e("Informations.9"),
                              }),
                            ],
                          }),
                        }),
                        Object(N.jsx)("div", {
                          className: "xl:w-1/3 md:w-1/2 p-4",
                          children: Object(N.jsxs)("div", {
                            className: "border border-gray-300 p-6 rounded-lg",
                            children: [
                              Object(N.jsx)("div", {
                                className:
                                  "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4",
                                children: Object(N.jsx)("svg", {
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  className: "w-6 h-6",
                                  viewBox: "0 0 24 24",
                                  children: Object(N.jsx)("path", {
                                    d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
                                  }),
                                }),
                              }),
                              Object(N.jsx)("h2", {
                                className:
                                  "text-lg text-gray-900 font-medium title-font mb-2",
                                children: e("Informations.10"),
                              }),
                              Object(N.jsx)("p", {
                                className: "leading-relaxed text-base",
                                children: e("Informations.11"),
                              }),
                            ],
                          }),
                        }),
                        Object(N.jsx)("div", {
                          className: "xl:w-1/3 md:w-1/2 p-4",
                          children: Object(N.jsxs)("div", {
                            className: "border border-gray-300 p-6 rounded-lg",
                            children: [
                              Object(N.jsx)("div", {
                                className:
                                  "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4",
                                children: Object(N.jsx)("svg", {
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  className: "w-6 h-6",
                                  viewBox: "0 0 24 24",
                                  children: Object(N.jsx)("path", {
                                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                  }),
                                }),
                              }),
                              Object(N.jsx)("h2", {
                                className:
                                  "text-lg text-gray-900 font-medium title-font mb-2",
                                children: e("Informations.12"),
                              }),
                              Object(N.jsx)("p", {
                                className: "leading-relaxed text-base",
                                children: e("Informations.13"),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(N.jsxs)("section", {
              className: "text-gray-700 body-font border-t border-gray-200",
              children: [
                Object(N.jsx)("h3", {
                  className:
                    "title-font sm:text-4xl text-3xl mt-4 font-medium text-gray-800",
                  style: { marginLeft: "2%" },
                  children: e("Etapes.1"),
                }),
                Object(N.jsx)("div", {
                  className: "container px-5 py-24 mx-auto ml-4 mr-4",
                  id: "etapes",
                  children: Object(N.jsxs)(pt.a, {
                    current: 0,
                    children: [
                      Object(N.jsx)(Ot, {
                        title: e("Etapes.2"),
                        description: e("Etapes.3"),
                      }),
                      Object(N.jsx)(Ot, {
                        title: e("Etapes.4"),
                        description: e("Etapes.5"),
                      }),
                      Object(N.jsx)(Ot, {
                        title: e("Etapes.6"),
                        description: e("Etapes.7"),
                      }),
                      Object(N.jsx)(Ot, {
                        title: e("Etapes.8"),
                        description: e("Etapes.9"),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(N.jsxs)("section", {
              className: "text-gray-700 body-font border-t border-gray-200",
              id: "info",
              children: [
                Object(N.jsx)("h3", {
                  className:
                    "title-font sm:text-4xl text-3xl mt-4 font-medium text-gray-800",
                  style: { marginLeft: "2%" },
                  children: e("Contact.1"),
                }),
                " ",
                Object(N.jsx)("br", {}),
              ],
            }),
            Object(N.jsxs)("section", {
              className: "text-gray-700 body-font relative",
              id: "contact",
              children: [
                Object(N.jsx)("div", {
                  className: "absolute inset-0 bg-gray-300",
                  children: Object(N.jsx)("iframe", {
                    width: "100%",
                    height: "100%",
                    frameBorder: "0",
                    marginHeight: "0",
                    marginWidth: "0",
                    title: "map",
                    scrolling: "no",
                    src: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=tunis+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed",
                  }),
                }),
                Object(N.jsx)("div", {
                  className: "container px-5 py-24 mx-auto flex",
                  children: Object(N.jsxs)("div", {
                    className:
                      "lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10",
                    children: [
                      Object(N.jsx)("h2", {
                        className:
                          "text-gray-900 text-lg mb-1 font-medium title-font",
                        children: e("Contact.1"),
                      }),
                      Object(N.jsx)("p", {
                        className: "leading-relaxed mb-5 text-gray-600",
                        children: e("Contact.2"),
                      }),
                      Object(N.jsx)("input", {
                        className:
                          "bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4",
                        placeholder: e("Form.1"),
                        type: "email",
                      }),
                      Object(N.jsx)("textarea", {
                        className:
                          "bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none",
                        placeholder: e("Form.2"),
                      }),
                      Object(N.jsx)("button", {
                        className:
                          "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                        children: e("Contact.3"),
                      }),
                      Object(N.jsx)("p", {
                        className: "text-xs text-gray-500 mt-3",
                        children: e("Contact.4"),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(N.jsx)("footer", {
              className: "text-gray-700 body-font",
              children: Object(N.jsx)("div", {
                className: "bg-gray-200",
                children: Object(N.jsxs)("div", {
                  className:
                    "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
                  children: [
                    Object(N.jsxs)("p", {
                      className:
                        "text-gray-500 text-sm text-center sm:text-left",
                      children: [
                        "\xa9 2021 React \u2014",
                        Object(N.jsx)("a", {
                          href: "https://twitter.com/knyttneve",
                          className: "text-gray-600 ml-1",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "@Ninja Turtles",
                        }),
                      ],
                    }),
                    Object(N.jsx)("span", {
                      className:
                        "sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm",
                      children: e("Footer.1"),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var vt = a(114),
        gt = a(242),
        yt = a(243),
        wt = a.n(yt),
        Nt = a(244),
        Ct = a(10),
        kt = a(1),
        Et = { loading: !1, listOperator: [], error: "" };
      var St = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Et,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            r = t.payload;
          switch (a) {
            case Ge:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { error: r, loading: !1 }
              );
            case Ye:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { loading: !0 });
            case We:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { listOperator: r, loading: !1 }
              );
            case Je:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            case Ze:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { listOperator: [].concat(Object(Ct.a)(e.listOperator), [r]) }
              );
            case Ke:
              var n = e.listOperator.filter(function (e) {
                return e._id !== r;
              });
              return Object(kt.a)(Object(kt.a)({}, e), {}, { listOperator: n });
            case Qe:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            case Xe:
              var c = e.listOperator.findIndex(function (e) {
                  return e._id === r.id;
                }),
                i = e.listOperator[c],
                s = e.listOperator;
              return (
                (s[c] = Object(kt.a)(Object(kt.a)({}, i), r.operatorData)),
                console.log(s),
                Object(kt.a)(Object(kt.a)({}, e), {}, { listOperator: s })
              );
            case $e:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            default:
              return e;
          }
        },
        It = { loading: !1, listPharmacy: [], error: "" };
      var Rt = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : It,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            r = t.payload;
          switch (a) {
            case ie:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { listPharmacy: r, loading: !1 }
              );
            case oe:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { error: r, loading: !1 }
              );
            case se:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { loading: !0 });
            case ne:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { listPharmacy: [].concat(Object(Ct.a)(e.listPharmacy), [r]) }
              );
            case ce:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            case le:
              var n = e.listPharmacy.filter(function (e) {
                return e._id !== r;
              });
              return Object(kt.a)(Object(kt.a)({}, e), {}, { listPharmacy: n });
            case de:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            case ue:
              var c = e.listPharmacy.findIndex(function (e) {
                  return e._id === r.id;
                }),
                i = e.listPharmacy[c],
                s = e.listPharmacy;
              return (
                (s[c] = Object(kt.a)(Object(kt.a)({}, i), r.pharmacyData)),
                console.log(s),
                Object(kt.a)(Object(kt.a)({}, e), {}, { listPharmacy: s })
              );
            case je:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            default:
              return e;
          }
        },
        At = { loading: !1, centersList: [], error: "" };
      var _t = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : At,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            r = t.payload;
          switch (a) {
            case Ie:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { centersList: r, loading: !1 }
              );
            case Ae:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { error: r, loading: !1 }
              );
            case Re:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { loading: !0 });
            case Ee:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { centersList: [].concat(Object(Ct.a)(e.centersList), [r]) }
              );
            case Se:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            case _e:
              var n = e.centersList.filter(function (e) {
                return e._id !== r;
              });
              return Object(kt.a)(Object(kt.a)({}, e), {}, { centersList: n });
            case Le:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            case Te:
              var c = e.centersList.findIndex(function (e) {
                  return e._id === r.id;
                }),
                i = e.centersList[c],
                s = e.centersList;
              return (
                (s[c] = Object(kt.a)(Object(kt.a)({}, i), r.centerData)),
                console.log(s),
                Object(kt.a)(Object(kt.a)({}, e), {}, { centersList: s })
              );
            case De:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            default:
              return e;
          }
        },
        Lt = "FETCH_CITIZEN_SUCCESS",
        Tt = "FETCH_CITIZEN_LOADING",
        Dt = "FETCH_CITIZEN_ERROR",
        Pt = "UPDATE_CITIZEN_SUCCESS",
        zt = "UPDATE_CITIZEN_ERROR",
        Vt = { loading: !1, citizensList: [], error: "" };
      var Ft = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Vt,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            r = t.payload;
          switch (a) {
            case Lt:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { citizensList: r, loading: !1 }
              );
            case Dt:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { error: r, loading: !1 }
              );
            case Tt:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { loading: !0 });
            case Pt:
              var n = e.citizensList.findIndex(function (e) {
                  return e._id === r.id;
                }),
                c = e.citizensList[n],
                i = e.citizensList;
              return (
                (i[n] = Object(kt.a)(Object(kt.a)({}, c), r.citizenData)),
                Object(kt.a)(Object(kt.a)({}, e), {}, { citizensList: i })
              );
            case zt:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            default:
              return e;
          }
        },
        Ut = "ADD_VOLUNTEER_SUCCESS",
        qt = "ADD_VOLUNTEER_ERROR",
        Mt = "FETCH_VOLUNTEER_SUCCESS",
        Bt = "FETCH_VOLUNTEER_ERROR",
        Ht = "FETCH_VOLUNTEER_LOADING",
        Wt = "DELETE_VOLUNTEER_SUCCESS",
        Yt = "DELETE_VOLUNTEER_ERROR",
        Gt = "UPDATE_VOLUNTEER_SUCCESS",
        Zt = "UPDATE_VOLUNTEER_ERROR",
        Jt = { loading: !1, listVolunteer: [], error: "" };
      var Kt = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Jt,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            r = t.payload;
          switch (a) {
            case Mt:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { listVolunteer: r, loading: !1 }
              );
            case Bt:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { error: r, loading: !1 }
              );
            case Ht:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { loading: !0 });
            case Ut:
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { listVolunteer: [].concat(Object(Ct.a)(e.listVolunteer), [r]) }
              );
            case qt:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            case Wt:
              var n = e.listVolunteer.filter(function (e) {
                return e._id !== r;
              });
              return Object(kt.a)(
                Object(kt.a)({}, e),
                {},
                { listVolunteer: n }
              );
            case Yt:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            case Gt:
              var c = e.listVolunteer.findIndex(function (e) {
                  return e._id === r.id;
                }),
                i = e.listVolunteer[c],
                s = e.listVolunteer;
              return (
                (s[c] = Object(kt.a)(Object(kt.a)({}, i), r.VOLUNTEERData)),
                console.log(s),
                Object(kt.a)(Object(kt.a)({}, e), {}, { listVolunteer: s })
              );
            case Zt:
              return Object(kt.a)(Object(kt.a)({}, e), {}, { error: r });
            default:
              return e;
          }
        },
        Qt = Object(vt.combineReducers)({
          operator: St,
          pharmacy: Rt,
          center: _t,
          citizen: Ft,
          volunteer: Kt,
        }),
        Xt = Object(vt.createStore)(
          Qt,
          Object(gt.composeWithDevTools)(Object(vt.applyMiddleware)(wt.a, Nt.a))
        );
      a(462);
      function $t() {
        return Object(N.jsx)("div", {
          className: "wrapper fadeInDown",
          children: Object(N.jsxs)("div", {
            id: "formContent",
            children: [
              Object(N.jsx)("h2", {
                className: "inactive underlineHover",
                children: Object(N.jsx)("a", {
                  href: "/citoyen/login",
                  children: "Connexion",
                }),
              }),
              Object(N.jsx)("h2", {
                className: "active",
                children: Object(N.jsx)("a", {
                  href: "/citoyen/insription",
                  children: "Inscription",
                }),
              }),
              Object(N.jsx)("br", {}),
              Object(N.jsx)("br", {}),
              Object(N.jsx)("div", {
                className: "fadeIn first",
                children: Object(N.jsx)(I.a, { icon: Object(N.jsx)(O.a, {}) }),
              }),
              Object(N.jsx)("br", {}),
              Object(N.jsxs)(p.a, {
                name: "normal_login",
                initialValues: { remember: !0 },
                onFinish: function () {
                  console.log("clicked");
                },
                children: [
                  Object(N.jsx)(x.a, {
                    type: "text",
                    id: "email",
                    className: "fadeIn second",
                    name: "email",
                    placeholder: "Votre mail (eg: email@gmail.com)",
                  }),
                  Object(N.jsx)(x.a, {
                    type: "text",
                    id: "name",
                    className: "fadeIn second",
                    name: "name",
                    placeholder: "Votre nom",
                  }),
                  Object(N.jsx)(x.a, {
                    type: "text",
                    id: "address",
                    className: "fadeIn second",
                    name: "address",
                    placeholder: "Votre adresse (eg: Tunis 12 Rue Tunis)",
                  }),
                  Object(N.jsx)(x.a, {
                    type: "text",
                    id: "phone",
                    className: "fadeIn second",
                    name: "phone",
                    placeholder:
                      "Votre num\xe9ro de telephone (eg: 71 458 965)",
                  }),
                  Object(N.jsx)(x.a, {
                    type: "password",
                    id: "password",
                    className: "fadeIn third",
                    name: "password",
                    placeholder: "Mot de passe",
                  }),
                  Object(N.jsx)("br", {}),
                  Object(N.jsx)("input", {
                    type: "submit",
                    className: "fadeIn fourth",
                    value: "Inscription",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function ea() {
        return Object(N.jsxs)(N.Fragment, {
          children: [
            Object(N.jsx)(mt, {}),
            Object(N.jsx)("link", {
              rel: "stylesheet",
              href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            }),
            Object(N.jsx)("section", {
              children: Object(N.jsx)("div", {
                className:
                  "container mx-auto flex px-5 py-12 md:flex-row flex-col items-center",
                children: Object(N.jsxs)("div", {
                  children: [
                    Object(N.jsx)("button", {
                      style: { float: "right" },
                      className:
                        "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                      children: "Prendre un rendez-vous",
                    }),
                    Object(N.jsx)("br", {}),
                    Object(N.jsx)("br", {}),
                    Object(N.jsx)("br", {}),
                    Object(N.jsx)("h1", {
                      className:
                        "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",
                      children: "Mon profile",
                    }),
                    Object(N.jsx)("p", {
                      className: "mb-8 leading-relaxed text-justify",
                      style: { fontSize: "15px" },
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    }),
                    Object(N.jsx)("div", {
                      children: Object(N.jsxs)("div", {
                        children: [
                          Object(N.jsxs)("div", {
                            style: { margin: "4%" },
                            children: [
                              Object(N.jsx)("h5", {
                                className:
                                  "title-font sm:text-2xl  mb-2  text-gray-900",
                                children: "Information g\xe9n\xe9rale",
                              }),
                              Object(N.jsxs)(h.a, {
                                style: { width: "100%" },
                                children: [
                                  "Nom prenom ",
                                  Object(N.jsx)("br", {}),
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut",
                                  Object(N.jsx)("br", {}),
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                                  Object(N.jsx)("br", {}),
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nisi ut aliquip",
                                  Object(N.jsx)("br", {}),
                                ],
                              }),
                            ],
                          }),
                          Object(N.jsxs)("div", {
                            style: { margin: "4%" },
                            children: [
                              Object(N.jsx)("h5", {
                                className:
                                  "title-font sm:text-2xl  mb-2  text-gray-900",
                                children: "Mon historique de vaccination",
                              }),
                              Object(N.jsxs)(h.a, {
                                style: { width: "100%" },
                                children: [
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut",
                                  Object(N.jsx)("br", {}),
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                                  Object(N.jsx)("br", {}),
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nisi ut aliquip",
                                  Object(N.jsx)("br", {}),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(N.jsxs)("div", {
                      style: { float: "right", display: "inline-block" },
                      children: [
                        Object(N.jsx)("button", {
                          style: { marginRight: "4px" },
                          className:
                            "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ",
                          children: "Modifier mes informations",
                        }),
                        Object(N.jsx)("button", {
                          className:
                            "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ",
                          children: "Imprimer mon pass sanitaire",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var ta = a(130),
        aa =
          (a(463),
          (function () {
            var e = Object(Y.a)(
              W.a.mark(function e(t) {
                var a;
                return W.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          $.a.get("volunteers/all", {
                            headers: { Authorization: "Bearer " + t },
                          })
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
        ra = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a) {
              var r;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.post("volunteers", t, {
                          headers: { Authorization: "Bearer " + a },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt("return", r);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        na = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a, r) {
              var n;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.put("volunteers/" + r, a, {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (n = e.sent), e.abrupt("return", n);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a, r) {
            return e.apply(this, arguments);
          };
        })(),
        ca = (function () {
          var e = Object(Y.a)(
            W.a.mark(function e(t, a) {
              var r;
              return W.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        $.a.delete("volunteers/" + a, {
                          headers: { Authorization: "Bearer " + t },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt("return", r);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        ia = function (e) {
          return { type: qt, payload: e };
        },
        sa = function (e) {
          return { type: Mt, payload: e };
        },
        oa = function () {
          return { type: Ht };
        },
        la = function (e) {
          return { type: Bt, payload: e };
        },
        da = function (e) {
          return { type: Yt, payload: e };
        },
        ua = function (e, t) {
          return { type: Gt, payload: { id: e, VolunteerData: t } };
        },
        ja = function (e) {
          return (function () {
            var t = Object(Y.a)(
              W.a.mark(function t(a) {
                var r;
                return W.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), ra(e, "");
                        case 3:
                          (r = t.sent),
                            a(((n = r.data), { type: Ut, payload: n })),
                            (t.next = 10);
                          break;
                        case 7:
                          (t.prev = 7), (t.t0 = t.catch(0)), a(ia(t.t0));
                        case 10:
                        case "end":
                          return t.stop();
                      }
                    var n;
                  },
                  t,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ba = function (e, t) {
          return (function () {
            var a = Object(Y.a)(
              W.a.mark(function a(r) {
                var n;
                return W.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            r(oa()), (a.prev = 1), (a.next = 4), na("", t, e)
                          );
                        case 4:
                          return (a.next = 6), aa("");
                        case 6:
                          (n = a.sent),
                            r(ua(e, t)),
                            r(sa(n.data)),
                            (a.next = 15);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(1)),
                            r(((c = a.t0), { type: Zt, payload: c })),
                            r(la(a.t0));
                        case 15:
                        case "end":
                          return a.stop();
                      }
                    var c;
                  },
                  a,
                  null,
                  [[1, 11]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        };
      function ha() {
        var e = Object(G.b)(),
          t = Object(G.c)(function (e) {
            return e.volunteer;
          });
        Object(r.useEffect)(
          function () {
            e(
              (function () {
                var e = Object(Y.a)(
                  W.a.mark(function e(t) {
                    var a;
                    return W.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t(oa()), (e.prev = 1), (e.next = 4), aa("")
                              );
                            case 4:
                              (a = e.sent), t(sa(a.data)), (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(1)), t(la(e.t0));
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            );
          },
          [e]
        );
        var a = [
            { title: "FirstName", dataIndex: "firstName", key: "firstName" },
            { title: "LastName", dataIndex: "lastName", key: "lastName" },
            { title: "Age", dataIndex: "age", key: "age" },
            {
              title: "PhoneNumber",
              dataIndex: "phoneNumber",
              key: "phoneNumber",
            },
            { title: "Cin", dataIndex: "cin", key: "cin" },
            { title: "Operator", dataIndex: "operator", key: "operator" },
            {
              title: "Volunteer_team",
              dataIndex: "volunteer_team",
              key: "volunteer_team",
            },
            {
              title: "Action",
              dataIndex: "",
              key: "x",
              render: function (t, a) {
                return Object(N.jsxs)("div", {
                  style: { display: "flex", justifyContent: "space-evenly" },
                  children: [
                    Object(N.jsx)(Z.a, {
                      title: "Sure to delete?",
                      onConfirm: function () {
                        return e(
                          (function (e) {
                            return (function () {
                              var t = Object(Y.a)(
                                W.a.mark(function t(a) {
                                  return W.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              (t.next = 3),
                                              ca("", e)
                                            );
                                          case 3:
                                            a({ type: Wt, payload: e }),
                                              (t.next = 9);
                                            break;
                                          case 6:
                                            (t.prev = 6),
                                              (t.t0 = t.catch(0)),
                                              a(da(t.t0));
                                          case 9:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 6]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(a._id)
                        );
                      },
                      children: Object(N.jsx)(m.a, {
                        danger: !0,
                        children: "Delete",
                      }),
                    }),
                    Object(N.jsx)(m.a, {
                      type: "primary",
                      onClick: function () {
                        !(function (e) {
                          var t = e._id,
                            a = e.firstName,
                            r = e.lastName,
                            n = e.age,
                            c = e.phoneNumber,
                            i = e.cin,
                            s = e.operator,
                            o = e.volunteer_team;
                          console.log(a),
                            console.log(s),
                            v(a),
                            C(r),
                            T(n),
                            V(c),
                            I(i),
                            M(s),
                            X(o),
                            ae(t);
                        })(a),
                          re();
                      },
                      children: "Update",
                    }),
                  ],
                });
              },
            },
          ],
          c = n.a.useState(!1),
          i = Object(A.a)(c, 2),
          s = i[0],
          o = i[1],
          l = n.a.useState(!1),
          d = Object(A.a)(l, 2),
          u = d[0],
          j = d[1],
          b = n.a.useState(""),
          O = Object(A.a)(b, 2),
          f = O[0],
          v = O[1],
          g = n.a.useState(""),
          y = Object(A.a)(g, 2),
          w = y[0],
          C = y[1],
          k = n.a.useState(""),
          E = Object(A.a)(k, 2),
          S = E[0],
          I = E[1],
          R = n.a.useState(""),
          _ = Object(A.a)(R, 2),
          L = _[0],
          T = _[1],
          D = n.a.useState(""),
          P = Object(A.a)(D, 2),
          z = P[0],
          V = P[1],
          F = n.a.useState(""),
          U = Object(A.a)(F, 2),
          q = U[0],
          M = U[1],
          B = n.a.useState(""),
          H = Object(A.a)(B, 2),
          Q = H[0],
          X = H[1],
          $ = Object(r.useState)(""),
          ee = Object(A.a)($, 2),
          te = ee[0],
          ae = ee[1],
          re = function () {
            o(!0);
          },
          ne = (function () {
            var t = Object(Y.a)(
              W.a.mark(function t() {
                return W.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        j(!0),
                          e(
                            ba(te, {
                              firstName: f,
                              lastName: w,
                              age: L,
                              phoneNumber: z,
                              cin: S,
                              operator: q,
                              volunteer_team: Q,
                            })
                          ),
                          o(!1),
                          j(!1);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return Object(N.jsxs)(h.a, {
          children: [
            Object(N.jsx)("h1", {
              style: {
                display: "inline-block",
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: 25,
                letterSpacing: 5,
                marginLeft: "23vw",
                marginBottom: "10vh",
                paddingLeft: "2vh",
                paddingRight: "2vh",
              },
              children: "List Volunteers",
            }),
            Object(N.jsx)("br", {}),
            Object(N.jsx)(J.a, {
              columns: a,
              dataSource: t.listVolunteer,
              bordered: !0,
              loading: t.loading,
              pagination: {
                defaultPageSize: 3,
                showSizeChanger: !0,
                pageSizeOptions: ["3", "6", "9"],
              },
            }),
            Object(N.jsx)(K.a, {
              width: "50vw",
              centered: !0,
              title: "Update Volunteer",
              visible: s,
              onOk: ne,
              confirmLoading: u,
              onCancel: function () {
                o(!1);
              },
              children: Object(N.jsxs)(p.a, {
                style: { height: "65vh", width: "55vw" },
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                layout: "horizontal",
                initialValues: { size: "large" },
                size: "large",
                children: [
                  Object(N.jsx)(p.a.Item, {
                    label: " FirstName",
                    name: "firstName",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: f,
                      onChange: function (e) {
                        return v(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "LastName",
                    name: "lastName",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: w,
                      onChange: function (e) {
                        return C(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Age",
                    name: "age",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: L,
                      onChange: function (e) {
                        return T(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "PhoneNumber",
                    name: "phoneNumber",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: z,
                      onChange: function (e) {
                        return V(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Cin",
                    name: "cin",
                    children: Object(N.jsx)(x.a, {
                      required: !0,
                      defaultValue: S,
                      onChange: function (e) {
                        return I(e.target.value);
                      },
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Operator",
                    name: "operator",
                    children: Object(N.jsx)(ta.a, {
                      defaultValue: q,
                      onChange: function (e) {
                        return M(e);
                      },
                      options: [
                        { value: "true", label: "true" },
                        { value: "flase", label: "false" },
                      ],
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Volunteer Team",
                    name: "volunteer_Team",
                    children: Object(N.jsx)(ta.a, {
                      defaultValue: Q,
                      onChange: function (e) {
                        return X(e);
                      },
                      options: [
                        {
                          value: "Tunisian Red Crescent",
                          label: "Tunisian Red Crescent",
                        },
                        { value: "Tunisian Scouts", label: "Tunisian Scouts" },
                      ],
                    }),
                  }),
                  Object(N.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                  }),
                ],
              }),
            }),
          ],
        });
      }
      a(464);
      function pa() {
        var e = p.a.useForm(),
          t = Object(A.a)(e, 1)[0],
          a = Object(b.f)(),
          r = Object(G.b)(),
          n = (function () {
            var e = Object(Y.a)(
              W.a.mark(function e(n) {
                var c, i, s, o, l, d, u;
                return W.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (c = n.firstName),
                          (i = n.lastName),
                          (s = n.age),
                          (o = n.phoneNumber),
                          (l = n.cin),
                          (d = n.operator),
                          (u = n.volunteer_team),
                          c && i && s && o && l
                            ? (r(
                                ja({
                                  firstName: c,
                                  lastName: i,
                                  age: s,
                                  phoneNumber: o,
                                  cin: l,
                                  operator: d,
                                  volunteer_team: u,
                                })
                              ),
                              a.push("/dashboard/listVolunteers"))
                            : E(
                                "error",
                                "Missing Data",
                                "You need to fill the up all the inputs"
                              ),
                          t.resetFields();
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(N.jsx)("div", {
          className: "container",
          children: Object(N.jsxs)(h.a, {
            bordered: !0,
            className: "card-form",
            children: [
              Object(N.jsx)("h1", {
                style: {
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: 25,
                  letterSpacing: 5,
                  marginLeft: "23vw",
                  marginBottom: "10vh",
                  paddingLeft: "2vh",
                  paddingRight: "2vh",
                },
                children: "ADD Volunteer",
              }),
              Object(N.jsxs)(p.a, {
                form: t,
                onFinish: function (e) {
                  n(e);
                },
                style: {
                  marginLeft: "12vw",
                  height: "40vh",
                  width: "50vw",
                  overflow: "auto",
                },
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                layout: "horizontal",
                initialValues: { size: "large" },
                size: "large",
                children: [
                  Object(N.jsx)(p.a.Item, {
                    label: " FirstName",
                    name: "firstName",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "LastName",
                    name: "lastName",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Age",
                    name: "age",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "PhoneNumber",
                    name: "phoneNumber",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Cin",
                    name: "cin",
                    children: Object(N.jsx)(x.a, { required: !0 }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Operator",
                    name: "operator",
                    children: Object(N.jsx)(ta.a, {
                      options: [
                        { value: "true", label: "true" },
                        { value: "flase", label: "false" },
                      ],
                    }),
                  }),
                  Object(N.jsx)(p.a.Item, {
                    label: "Volunteer Team",
                    name: "volunteer_Team",
                    children: Object(N.jsx)(ta.a, {
                      options: [
                        {
                          value: "Tunisian Red Crescent",
                          label: "Tunisian Red Crescent",
                        },
                        { value: "Tunisian Scouts", label: "Tunisian Scouts" },
                      ],
                    }),
                  }),
                  Object(N.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                    children: Object(N.jsx)(m.a, {
                      style: { marginRight: "6vw", marginTop: "2vh" },
                      type: "primary",
                      htmlType: "submit",
                      children: "Add Volunteer",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var xa = function () {
          return Object(N.jsx)("div", {
            style: { height: "100vh", width: "100vw" },
            children: Object(N.jsx)(G.a, {
              store: Xt,
              children: Object(N.jsx)(j.a, {
                children: Object(N.jsxs)(b.c, {
                  children: [
                    Object(N.jsx)(b.a, {
                      path: "/",
                      exact: !0,
                      children: Object(N.jsx)(ft, {}),
                    }),
                    Object(N.jsx)(b.a, {
                      path: "/login",
                      exact: !0,
                      children: Object(N.jsx)(S, {}),
                    }),
                    Object(N.jsx)(b.a, {
                      path: "/citoyen/login",
                      exact: !0,
                      children: Object(N.jsx)(R, {}),
                    }),
                    Object(N.jsx)(b.a, {
                      path: "/citoyen/insription",
                      exact: !0,
                      children: Object(N.jsx)($t, {}),
                    }),
                    Object(N.jsx)(b.a, {
                      path: "/citoyen/profile",
                      exact: !0,
                      children: Object(N.jsx)(ea, {}),
                    }),
                    Object(N.jsxs)(B, {
                      children: [
                        Object(N.jsx)(b.a, {
                          path: "/dashboard",
                          exact: !0,
                          children: "Hello Admin",
                        }),
                        Object(N.jsx)(b.a, {
                          path: "/dashboard/listPharmacies",
                          children: Object(N.jsx)(ge, {}),
                        }),
                        Object(N.jsx)(b.a, {
                          path: "/dashboard/addPharmacy",
                          children: Object(N.jsx)(ye, {}),
                        }),
                        Object(N.jsx)(b.a, {
                          path: "/dashboard/ListCenters",
                          children: Object(N.jsx)(Be, {}),
                        }),
                        Object(N.jsx)(b.a, {
                          path: "/dashboard/AddCenter",
                          children: Object(N.jsx)(He, {}),
                        }),
                        Object(N.jsx)(b.a, {
                          path: "/dashboard/listOperators",
                          children: Object(N.jsx)(jt, {}),
                        }),
                        Object(N.jsx)(b.a, {
                          path: "/dashboard/addOperator",
                          children: Object(N.jsx)(bt, {}),
                        }),
                        Object(N.jsx)(b.a, {
                          path: "/dashboard/listVolunteers",
                          children: Object(N.jsx)(ha, {}),
                        }),
                        Object(N.jsx)(b.a, {
                          path: "/dashboard/addVolunteer",
                          children: Object(N.jsx)(pa, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        ma = (a(465), a(245)),
        Oa = a.n(ma);
      i.a.render(
        Object(N.jsx)(r.Suspense, {
          fallback: Object(N.jsx)(Oa.a, {
            type: "Puff",
            color: "#00BFFF",
            height: 100,
            width: 100,
            timeout: 3e3,
          }),
          children: Object(N.jsx)(xa, {}),
        }),
        document.getElementById("root")
      );
    },
  },
  [[484, 1, 2]],
]);
//# sourceMappingURL=main.f1b11296.chunk.js.map
