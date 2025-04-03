import {
  useQuery
} from "/build/_shared/chunk-H3NVPE2G.js";
import {
  axios_default
} from "/build/_shared/chunk-JUF4VJR4.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-B53ZT53Z.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-HQ2WGSQV.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/admin.tsx
var import_node = __toESM(require_node(), 1);

// app/utils/api.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/api.ts"
  );
  import.meta.hot.lastModified = "1743659762683.75";
}
var api = axios_default.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json"
  }
});
async function getWaitlist() {
  try {
    const response = await api.get("/waitlist");
    return response.data;
  } catch (error) {
    if (axios_default.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Failed to fetch waitlist");
  }
}

// app/components/AdminDashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AdminDashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AdminDashboard.tsx"
  );
  import.meta.hot.lastModified = "1743659762692.7083";
}
function AdminDashboard({
  entries
}) {
  const totalEntries = entries.length;
  const planCounts = entries.reduce((acc, entry) => {
    acc[entry.plan] = (acc[entry.plan] || 0) + 1;
    return acc;
  }, {});
  const today = /* @__PURE__ */ new Date();
  const todayEntries = entries.filter((entry) => {
    const entryDate = new Date(entry.created_at);
    return entryDate.toDateString() === today.toDateString();
  }).length;
  const stats = [{
    name: "Total Waitlist Entries",
    value: totalEntries
  }, {
    name: "Today's New Entries",
    value: todayEntries
  }, {
    name: "Free Plan",
    value: planCounts["free"] || 0
  }, {
    name: "Pro Plan",
    value: planCounts["pro"] || 0
  }, {
    name: "Enterprise Plan",
    value: planCounts["enterprise"] || 0
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute rounded-md bg-indigo-500 p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }, void 0, false, {
        fileName: "app/components/AdminDashboard.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/AdminDashboard.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/AdminDashboard.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-16 truncate text-sm font-medium text-gray-500", children: stat.name }, void 0, false, {
        fileName: "app/components/AdminDashboard.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AdminDashboard.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "ml-16 flex items-baseline pb-6 sm:pb-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-semibold text-gray-900", children: stat.value }, void 0, false, {
      fileName: "app/components/AdminDashboard.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/AdminDashboard.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this)
  ] }, stat.name, true, {
    fileName: "app/components/AdminDashboard.tsx",
    lineNumber: 51,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/components/AdminDashboard.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_c = AdminDashboard;
var _c;
$RefreshReg$(_c, "AdminDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.tsx"
  );
  import.meta.hot.lastModified = "1743659762697.3796";
}
function AdminPage() {
  _s();
  const {
    token
  } = useLoaderData();
  const navigate = useNavigate();
  const {
    data: entries,
    isLoading,
    error
  } = useQuery({
    queryKey: ["waitlist"],
    queryFn: getWaitlist
  });
  const handleLogout = () => {
    navigate("/");
  };
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center", children: "Loading..." }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 60,
      columnNumber: 12
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center text-red-600", children: "Error loading waitlist" }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 67,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-semibold text-gray-900", children: "Waitlist Management" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "A list of all users who have joined the waitlist." }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: handleLogout, className: "block rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50", children: "Logout" }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminDashboard, { entries: entries || [] }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6", children: "Email" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 102,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Plan" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 105,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { scope: "col", className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Joined" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 108,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 101,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 100,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { className: "divide-y divide-gray-200 bg-white", children: entries?.map((entry) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6", children: entry.email }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 115,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: entry.plan }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 118,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: new Date(entry.created_at).toLocaleDateString() }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 121,
          columnNumber: 25
        }, this)
      ] }, entry.id, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 114,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 113,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 99,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 98,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(AdminPage, "ni4l48HR/g/wP7i6fQKBxvICFsI=", false, function() {
  return [useLoaderData, useNavigate, useQuery];
});
_c2 = AdminPage;
var _c2;
$RefreshReg$(_c2, "AdminPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminPage as default
};
//# sourceMappingURL=/build/routes/admin-OLTSGMWI.js.map
